export const SET_TODO = 'todoList/SET_TODO'
export const SET_UPDATE = 'todoList/SET_UPDATE'


export const setTodo = (todo) => {
    return {
        type: SET_TODO,
        todo
    }
}

export const setUpdate = (todo) => {
    return {
        type: SET_UPDATE,
        todo
    }
}