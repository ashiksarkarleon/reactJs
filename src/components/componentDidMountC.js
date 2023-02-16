import React from "react";

class componentDidMountC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Nisan",
            color : "Red"
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({color : "Black"})
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>Car name is {this.state.name}</h2>
                <h2>Car color is {this.state.color}</h2>
            </div>
        );

      }
}

export default componentDidMountC;