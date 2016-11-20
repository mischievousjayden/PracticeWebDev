import { EventEmitter } from "events";

import dispatcher from "./TodoDispatcher.js";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todo_list = {
            list1: [
                {id: 1, text: "todo11", complete: false},
                {id: 2, text: "todo12", complete: false},
                {id: 3, text: "todo13", complete: false}
            ],
            list2: [
                {id: 1, text: "todo21", complete: false},
                {id: 2, text: "todo22", complete: false},
                {id: 3, text: "todo23", complete: true},
                {id: 3, text: "todo24", complete: true}
            ],
            list3: [
                {id: 1, text: "todo31", complete: false},
                {id: 2, text: "todo32", complete: true},
                {id: 3, text: "todo33", complete: true}
            ],
            list4: [
                {id: 1, text: "todo41", complete: true},
                {id: 2, text: "todo42", complete: false},
                {id: 3, text: "todo43", complete: true}
            ],
            list5: [
                {id: 1, text: "todo51", complete: false},
                {id: 2, text: "todo52", complete: false},
                {id: 3, text: "todo53", complete: true},
                {id: 4, text: "todo54", complete: false},
                {id: 5, text: "todo55", complete: true},
                {id: 6, text: "todo56", complete: true},
                {id: 7, text: "todo57", complete: true},
                {id: 8, text: "todo58", complete: true}
            ]
        };
    };

    getList() {
        return Object.keys(this.todo_list);
    }

    createTodo(list_name, text) {
        const id = Date.now();
        this.todo_list[list_name].push({id, text, complete:false});
        console.log("create todo", this.todo_list[list_name]);
        this.emit("change");
    }

    removeTodo(list_name, todo_id) {
        this.todo_list[list_name] = this.todo_list[list_name].filter(function(data, index) {
            return data.id != todo_id;
        });
        console.log("remove todo", this.todo_list[list_name]);
        this.emit("change");
    }

    changeComplete(list_name, todo_id) {
        var result = this.todo_list[list_name].filter(function(data, index) {
            return data.id == todo_id;
        });
        result[0].complete = !result[0].complete;
        console.log("change complete", this.todo_list[list_name]);
        this.emit("change");
    }

    getTodos(list_name) {
        console.log("get todo", this.todo_list[list_name]);
        return this.todo_list[list_name];
    }

    handleAction(action) {
        console.log("TodoStre received an action", action);
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.list_name, action.text);
                break;
            }
            case "REMOVE_TODO": {
                this.removeTodo(action.list_name, action.todo_id);
                break;
            }
            case "CHANGE_COMPLETE": {
                this.changeComplete(action.list_name, action.todo_id);
                break;
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;

