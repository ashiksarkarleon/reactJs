import { useState } from "react";

// Adding Forms in React
/*
function ReactForms(){
    return(
        <form>
            <label>Enter Your name:
                <input type={"text"} />
            </label>
        </form>
    )
}
*/

/*
// Handling Forms 
// Use the useState Hook to manage the input:
function ReactForms(){
    
    const [name, setName] = useState("");

    return(
        <form>
            <label>Enter Your name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
        </form>
    )

}
*/

/*
// Submitting Forms
function ReactForms(){
    
    const [name, setName] = useState("");

    const mySubmitEvent = (event) => {
        event.preventDefault();
        alert("Your name is " + name)
    }

    return(
        <form onSubmit={mySubmitEvent}>
            <label>Enter Your name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
        </form>
    )
}
*/

/*
// Multiple Input Fields
function ReactForms(){
    
    const [inputs, setInputs] = useState({});

    const changeInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    }

    const mySubmitEvent = (event) => {
        event.preventDefault();
        alert("your name is " + inputs.username + " and password is " + inputs.password);
        //console.log(inputs);
    }

    return(
        <form onSubmit={mySubmitEvent}>
            <label>Enter Your name:
                <input type="text" name="username" value={inputs.username} onChange={changeInputs}/>
            </label><br/>
            <label>Enter Your password:
                <input type="password" name="password" value={inputs.password} onChange={changeInputs}/>
            </label><br/>
            <input type={"submit"}/>
        </form>
    )
}
*/

/*
// Textarea
function ReactForms(){

    const [textarea, setTextarea] = useState("This is textarea");

    const handleChange = (event) => {
        setTextarea(event.target.value);
    }

    return(
        <form>
            <textarea type="textarea" value={textarea} onChange={handleChange}/>
        </form>
    )
}
*/

// Select
function ReactForms(){

    const [groups, setGroups] = useState("None");

    const handleChange = (event) => {
        setGroups(event.target.value);
        //alert(groups);
    }

    return(
        <form>
            <select value={groups} onChange={handleChange}>
                <option value="None">None</option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="RAC">RAC</option>
            </select>
        </form>
    )
}

export default ReactForms;