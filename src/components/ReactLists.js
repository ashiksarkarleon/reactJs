function ReactLists(){
    
    function Car(props){
        return <li>Car name is {props.name}</li>
    }

    /*
   const cars = ['Nisan', 'Toyota', 'BMW'];

   return(
    <>
        <h1>All Car Name</h1>
        <ul>
            {cars.map((car) => <Car name = {car}/>)}
        </ul>
    </>
   );
*/

// key

const cars = [
    {id : 1, name : 'Nisan'},
    {id : 2, name : 'Toyota'},
    {id : 3, name : 'BMW'}
    ];

return(
 <>
     <h1>All Car Name</h1>
     <ul>
         {cars.map((car) => <Car key={car.id} name={car.name}/>)}
     </ul>
 </>
);

}

export default ReactLists;