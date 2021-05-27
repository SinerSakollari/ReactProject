import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from "react-router-dom";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    //helper method which cheks if the current user is the owner of the stream
    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return(
                <div className="right floated content">
                    <button className="ui button primary">
                        Edit
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            ) 
        }
    }
    
    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id} >
                    {this.renderAdmin(stream)}
                    <i className="large middle alligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="dscription" >{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return(
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">Create stream</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

//The list is passed as an object into the store in order to easily modify it
//When the list is called it will be cconverted into an array again to map it
const mapStateToProps = (state) =>{
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn 
    };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);