import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'
import { loadState, saveState } from '../features/localStorage';

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  preloadedState
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});