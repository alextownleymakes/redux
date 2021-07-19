import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },

        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    item.done = !item.done
                }
            })
        },

        setDel: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    item.del = !item.del
                }
            })
        }
    }
});

export const { saveTodo, setCheck, setDel } = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer;