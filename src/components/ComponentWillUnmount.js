import React from "react";

class ComponentWillUnmount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : true,
        };
    }

    delData = () => {
        this.setState({show : false});
    }

    render() {
        let data;
        if(this.state.show){
            data = <SomeData/>;
        };

        return (
            <div>
                {data}
                <button type="button" onClick={this.delData}>Delete</button>
            </div>
        );

      }
}

class SomeData extends React.Component{
    componentWillUnmount(){
        alert("Delete");
    }

    render(){
        return(
            <h1>Hello World!</h1>
        );
    }
}

export default ComponentWillUnmount;