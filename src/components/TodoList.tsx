import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const TodoList: FC = () => {
    const {
        loading,
        error, limit,
        page, todos
    } = useTypedSelector(state => state.todo);

    const {fetchTodos,setTodopage} = useAction();

    const pg = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page]);

    if (loading) {
        return <h1>...going loading</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map(todo => (
                <div style={{textAlign: "center"}} key={todo.id}>
                    {todo.title} -- {todo.userId}--{todo.id}


                </div>
            ))}
            <div  style={{display:"flex"}}>

                {pg.map(p => (
                    <div onClick={()=>setTodopage(p)}
                        key={p} style={{
                        border: p === page ? '2px solid green' : '1px solid grey',
                        padding: 10
                    }}>
                        {p}
                    </div>
                ))}


            </div>


        </div>
    );
};

export default TodoList;