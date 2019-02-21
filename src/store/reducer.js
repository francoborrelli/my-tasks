import reducer from "./utils/reducer";
import * as mutations from "./mutations";

const setStorage = e => {
  localStorage.setItem("todos", JSON.stringify(e));
};

const handlers = {
  [mutations.ADD_TODO]: (state, text) => {
    const todos = [...state.todos, { date: new Date(), text: text }];
    setStorage(todos);
    return { todos };
  },

  [mutations.EDIT_TODO]: (state, element) => {
    const index = state.todos.findIndex(t => element.old === t);
    const todos = [
      ...state.todos.slice(0, index),
      { ...element.old, text: element.new },
      ...state.todos.slice(index + 1)
    ];
    setStorage(todos);
    return { todos };
  },

  [mutations.REMOVE_TODO]: (state, removed) => {
    const todos = state.todos.filter(todo => todo !== removed);
    setStorage(todos);
    return { todos };
  }
};

const toDo = localStorage.getItem("todos");

const defaultState = {
  todos: toDo !== null ? JSON.parse(toDo) : []
};

export default reducer(handlers, defaultState);
