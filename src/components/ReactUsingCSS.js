import React from "react";

//CSS Modules
import styles from './css/my-style.module.css';

// Inline Styling
const ReactUsingCSS = () => {
    
    // JavaScript Object
    const ownStyle ={
        color:'red',
        fontSize:30
    };

    return(
        <>
            <h1 style={{color:"green"}}>Hello React 1</h1>
            <h1 style={{backgroundColor:"green"}}>Hello React 2</h1>
            <h1 style={ownStyle}>Hello React 3</h1>
            <h1 className={styles.namestyle}>Hello React 4</h1>
        </>
    )

};

export default ReactUsingCSS;