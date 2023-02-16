/*
function ReactEvents(){
    
    const myclick = () => {
        alert("Hi React!");
    }

    return (
        <button onClick={myclick}>Click</button>
    );
}
*/

// Passing Arguments
/*
function ReactEvents(){
    
    const myclick = (a) => {
        alert("Hi " + a);
    }

    return (
        <button onClick={() => myclick("React!")}>Click</button>
    );
}
*/

// React Event Object
function ReactEvents(){
    
    const myclick = (a,b) => {
        alert("event name is " + b.type + "Hi " + a);
    }

    return (
        <button onClick={(event) => myclick("React!",event)}>Click</button>
    );
}

export default ReactEvents;