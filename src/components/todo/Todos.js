import { memo } from "react";

const Todos = ({todos}) => {
    return(
        <>
            <h1>Todos</h1>
            {
                todos.map((todo, index) => {
                    return <h3 key={index}>{todo}</h3>
                })
            }
        </>
    )
}

export default memo(Todos);