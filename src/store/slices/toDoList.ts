import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ToDo {
  id: number;
  title: string;
  summary: string;
}

export type FormData = Omit<ToDo, 'id'>;

export interface ToDoListState {
  list: ToDo[];
}

const initialState: ToDoListState = {
  list: [],
};

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<ToDo>) => {
      state.list.push(action.payload);
    },
    editToDo: (state, action: PayloadAction<ToDo>) => {
      const index = state.list.findIndex((toDo) => toDo.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removeToDo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((toDo) => toDo.id !== action.payload);
    },
    reorderToDos: (state, action: PayloadAction<{ source: number; destination: number }>) => {
      const [removed] = state.list.splice(action.payload.source, 1);
      state.list.splice(action.payload.destination, 0, removed);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToDo, reorderToDos, editToDo, removeToDo } = toDoListSlice.actions;

export default toDoListSlice.reducer;
