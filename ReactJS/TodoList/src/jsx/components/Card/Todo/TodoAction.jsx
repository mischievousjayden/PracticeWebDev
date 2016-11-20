import dispatcher from "./TodoDispatcher.js"

export function createTodo(list_name, text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        list_name,
        text
    });
}

export function removeTodo(list_name, todo_id) {
    dispatcher.dispatch({
        type: "REMOVE_TODO",
        list_name,
        todo_id
    });
}

export function changeComplete(list_name, todo_id) {
    dispatcher.dispatch({
        type: "CHANGE_COMPLETE",
        list_name,
        todo_id
    });
}

