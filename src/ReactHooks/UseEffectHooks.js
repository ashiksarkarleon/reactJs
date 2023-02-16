import { useState, useEffect } from "react";

/*
function Timer(){

    const [count, setCount] = useState(0);

    useEffect(() =>{
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);
    });

    return (
        <>
            <h1>Count : {count}</h1>
        </>
    )
}
*/

/*
// Only run the effect on the initial render:
function Timer(){

    const [count, setCount] = useState(0);

    useEffect(() =>{
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);
    }, []);

    return (
        <>
            <h1>Count : {count}</h1>
        </>
    )
}
*/

/*
// Here is an example of a useEffect Hook that is dependent on a variable.
// If the count variable updates, the effect will run again:
function Timer(){

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() =>{
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <>
            <h1>Count : {count}</h1>
            <button type="button" onClick={() => setCount((c) => c + 1)}>Update</button>
            <h1>Calculation : {calculation}</h1>
        </>
    )
}
*/

// Effect Cleanup
function Timer(){

    const [count, setCount] = useState(0);

    useEffect(() =>{
        let time = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);

        return () => clearTimeout(time);

    }, []);

    return (
        <>
            <h1>Rendered Count : {count}</h1>
        </>
    )
}


export default Timer;