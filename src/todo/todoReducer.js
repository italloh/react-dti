import {SET_TODO, SET_UPDATE} from './todoAction'
import TODO_LIST_STATIC from '../todo-list';
//TODO criar insert e retirar arquivo estático
const INITIAL_STATE = {
    todos: TODO_LIST_STATIC
}

const atualizarToDo = (todos, newToDo) => {
  const index = todos.findIndex((todo) => todo.id === newToDo.id)
  if (index === -1) {
    todos.push(newToDo)
  } else {
    todos[index] = newToDo
  }

  return todos;
}

export default (state = INITIAL_STATE, action) => {
  console.log(action, state)
    switch (action.type) {
      case SET_TODO:
        return { ...state, todos: [... state.todos, ... action.todo] };

      case SET_UPDATE:
        return { ...state, todos: atualizarToDo(state.todos, action.todo)}  
  
      default:
        return { ...state };
    }
  };