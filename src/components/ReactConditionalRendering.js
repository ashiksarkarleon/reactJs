function ReactConditionalRendering(props){
    
    // if COndition
    /*
    const isBool = props.isBool;
    if(isBool){
        return (
            <h1>true</h1>
        );
    }

    return (
        <h1>false</h1>
    );
    */

    // Logical && Operator
    /*
    const cars = props.cars;
    return (
        <>
            {cars.length > 0 && 
                <h2>total cars is {cars.length}</h2>
            }
        </>
    );
    */

   // Ternary Operator
   function IsTrueFunc(){
    return <h1>it's ture</h1>;
   }
   function IsFalseFunc(){
    return <h1>it's false</h1>;
   }

   const isCond = props.isCond;

   return(
    <>
        {isCond ? <IsTrueFunc/> : <IsFalseFunc/>}
    </>
   );

}

export default ReactConditionalRendering;