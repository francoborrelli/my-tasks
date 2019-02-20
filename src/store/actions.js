import { createAction } from "redux-actions";
import * as mutations from "./mutations";

export const addToDo = createAction(mutations.ADD_TODO);
export const editToDo = createAction(mutations.EDIT_TODO);
export const removeToDo = createAction(mutations.REMOVE_TODO);
