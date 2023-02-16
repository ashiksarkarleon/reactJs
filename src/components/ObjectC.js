import React from "react";

class ObjectC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Nisan",
            color : "Red"
        };
    }

    colorCh = () => {
        this.setState({color : "Green"});
    }

    render() {
        return (
            <div>
                <h2>Car name is {this.state.name}</h2>
                <h2>Car color is {this.state.color}</h2>
                <button type="button" onClick={this.colorCh}>Ok</button>
            </div>
        );

      }
}

export default ObjectC;