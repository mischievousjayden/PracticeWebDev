import React from "react";

import Todos from "./Todos.jsx";
import TodoStore from "./TodoStore.js";
import * as TodoAction from "./TodoAction.jsx";


export default class TodoListCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list_name: this.props.list_name,
            todos: TodoStore.getTodos(this.props.list_name)
        };
        this.getTodos = this.getTodos.bind(this);
        this.createTodo = this.createTodo.bind(this);
    }

    componentWillMount() {
        TodoStore.on("change", this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListner("change", this.getTodos);
    }

    getTodos() {
        var filtered_todos = TodoStore.getTodos(this.state.list_name);
        this.setState({
            todos: filtered_todos
        });
    }

    createTodo() {
        var text = document.getElementById("new_todo").value;
        if(text != "") {
            TodoAction.createTodo(this.state.list_name, text);
            document.getElementById("new_todo").value = "";
        }
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    } 

    render () {
        const { list_name, todos } = this.state;
        return(
            <main class="mdl-layout__content">
                <div class="mdl-card mdl-cell mdl-cell--6-col mdl-cell--3-offset mdl-shadow--2dp">
                    <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 class="mdl-card__title-text">{list_name}</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <div class="mdl-textfield mdl-js-textfield">
                            <input class="mdl-textfield__input" type="text" id="new_todo" />
                            <label class="mdl-textfield__label" for="new_todo">New todo</label>
                        </div>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.createTodo} ><i class="material-icons">add</i></button>

                        <Todos list_name={list_name} todos={todos}/>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">All</button>
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Activate</button>
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Complete</button>
                    </div>
                </div>
            </main>            
        );
    }
}

