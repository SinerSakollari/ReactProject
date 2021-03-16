import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = { lat: null , ererorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ ererorMessage: err.message })
            }
        );
    }

    render(){
        if (this.state.ererorMessage && !this.state.lat) {
            return <div>Error: {this.state.ererorMessage}</div>;
        }

        if (!this.state.ererorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading...</div>;
    };


}


ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);