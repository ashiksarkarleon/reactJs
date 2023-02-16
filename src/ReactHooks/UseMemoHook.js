import { useState } from "react";

const UseMemoHook = () =>{

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const calculation = expensiveCalculation(count);

    const increment = () =>{
        setCount((c) => c+1);
    };

    const addTodo = () =>{
        setTodos((t) => [...t, "New Todo"]);
    };

    return(
        <>
            <div>
                <div>
                    <h1>My Todo</h1>
                    {todos.map((todo, index) =>{
                        return <p key={index}>{todo}</p>
                    })}
                    <button onClick={addTodo}>Add Todo</button>
                </div>
                <hr/>
                <div>
                    count: {count}
                    <button onClick={increment}>+</button>
                    <h1>Expensive Calculation</h1>
                    {calculation}
                </div>
            </div>
        </>
    )
}

const expensiveCalculation = (num) =>{

    console.log("Calculation...")

    for(let i=0; i < 1000; i++){
        num += 1;
    }

    return num;
}

export default UseMemoHook;