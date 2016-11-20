import React from "react";

import * as TodoAction from "./TodoAction.jsx";


export default class Todo extends React.Component {
    changeComplete() {
        TodoAction.changeComplete(this.props.list_name, this.props.todo.id);
    }

    removeTodo() {
        TodoAction.removeTodo(this.props.list_name, this.props.todo.id);
    }

    render () {
        const {id, text, complete} = this.props.todo;
        return(
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" >
                <input type="checkbox" class="mdl-checkbox__input" checked={complete} onChange={this.changeComplete.bind(this)}/>
                <span class="mdl-checkbox__label">{text}</span>
                <button class="mdl-button mdl-js-button mdl-button--icon" onClick={this.removeTodo.bind(this)}><i class="material-icons">delete</i></button>
            </label>
        );
    }
}

