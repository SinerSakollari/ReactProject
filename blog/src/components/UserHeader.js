import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const { user } = this.props;
        
        if (!user) {
            return null;
        }

        return <div className="header">{user.name}</div>;
    }
}

const mapStatetoProps = (state, ownProps) => {
    //The calculation that were wdone in the render method can be delegated to the mapStatetoProps method
    //The ownProps is used to reference the props that will be passed to the component  
    return { user:  state.users.find(user => user.id === ownProps.userId)};
};


export default connect(mapStatetoProps)(UserHeader);