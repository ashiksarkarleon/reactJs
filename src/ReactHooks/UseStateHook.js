import { useState } from "react";

function FevColor(){

    /*
    // Initialize useState
    // Read State
    // Update State
    const [color, setColor] = useState("red");

    return(
        <>
            <h1>My favorite color is {color}</h1>
            <button type="button" onClick={() => setColor("green")}>Click</button>
        </>
    )
    */
/*
    // multiple state Hooks
    const [color, setColor] = useState("red");
    const [name, setName] = useState("Ashik");
    const [age, setAge] = useState("24");

    return(
        <>
            <h1>My name is {name}</h1>
            <h1>My favorite color is {color}</h1>
            <h1>My age is {age}</h1>
        </>
    )
*/

/*
// use one state and include an object instead
const [info, setInfo] = useState({
    name: "Ashik",
    age: "24",
    fevColor: "black"
});

return(
    <>
        <h1>My name is {info.name}</h1>
        <h1>My favorite color is {info.fevColor}</h1>
        <h1>My age is {info.age}</h1>
    </>
)
*/

// Updating Objects and Arrays in State
const [info, setInfo] = useState({
    name: "Ashik",
    age: "24",
    fevColor: "black"
});

const updateInfo = () =>{
    setInfo(preInfo =>{
        return {...preInfo, fevColor: "white"}
    });
}

return(
    <>
        <h1>My name is {info.name}</h1>
        <h1>My favorite color is {info.fevColor}</h1>
        <h1>My age is {info.age}</h1>
        <button type="button" onClick={updateInfo}>Update</button>
    </>
)


}

export default FevColor;