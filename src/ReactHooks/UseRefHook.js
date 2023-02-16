import { useState, useEffect, useRef } from "react";

/*
function UseRefHook(){
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() =>{
        count.current = count.current + 1;
    });

    return(
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h1>Render count : {count.current}</h1>
        </>
    );
}
*/

/*
//Accessing DOM Elements
function UseRefHook(){

    const inputElement = useRef();

    const focusInput = () =>{
        inputElement.current.focus();
    };


    return(
        <>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus</button>
        </>
    );
}
*/

// Tracking State Changes
function UseRefHook(){

    const [inputValue, setInputValue] = useState();
    const previousInputValue = useRef();

    useEffect(() =>{
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return(
        <>
            <input type="text" value={inputValue} onChange={(e) =>{setInputValue(e.target.value)}}/>
            <h1>Current value: {inputValue}</h1>
            <h1>Previous value: {previousInputValue.current}</h1>
        </>
    );
}

export default UseRefHook;