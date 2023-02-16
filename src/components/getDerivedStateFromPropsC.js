import React from "react";

class getDerivedStateFromPropsC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Nisan",
            color : "Red"
        };
    }

    static getDerivedStateFromProps(props, state){
        return{color : props.fcolor}
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

export default getDerivedStateFromPropsC;