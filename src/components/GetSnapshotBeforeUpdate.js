import React from "react";

class GetSnapshotBeforeUpdate extends React.Component{
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

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("h31").innerHTML = "Befor Car color was" + prevState.color;
    }

     componentDidUpdate(){
        document.getElementById("h32").innerHTML = "After Car color is " + this.state.color;
     }

    render() {
        return (
            <div>
                <h2>Car color is {this.state.color}</h2>
                <h3 id="h31"></h3>
                <h3 id="h32"></h3>
            </div>
        );

      }
}

export default GetSnapshotBeforeUpdate;