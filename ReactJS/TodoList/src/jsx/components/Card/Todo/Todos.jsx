import React from "react";

import Todo from "./Todo.jsx";

export default class Todos extends React.Component {
    render () {
        const { list_name, todos } = this.props;
        return(
            <ul class="mdl-list">
                {todos.map((todo) => {
                    return <li key={todo.id} class="mdl-list__item"><Todo list_name={list_name} todo={todo}/></li>
                })}
            </ul>
        );
    }
}

