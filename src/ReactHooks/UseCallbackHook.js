import { useState, useCallback } from "react";
import Todos from './Todos';

const UseCallbackHook = () =>{
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () =>{
        setCount((c) => c+1);
    };

    const addTodo = useCallback(() =>{
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return(
        <>
            <Todos todos={todos} addTodo={addTodo}/>
            <div>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default UseCallbackHook;