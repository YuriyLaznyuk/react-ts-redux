import React from 'react';
import './app.scss'
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
function App() {
    return (
        <div>
            <h1>TS REDUX</h1>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
}

export default App;