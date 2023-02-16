function CarName(props){
    // return <h1>This Car name is {props.data}</h1>
    return <h1>This Car name is {props.data.name}</h1>
}

function Car(){
    const name = "BMW";
    const info = {name:"Nisan", color:"red"};
    return (
        // <CarName data = "Nisan"/>
        // <CarName data = {name}/>
        <CarName data = {info}/>
    )
}

export default Car;