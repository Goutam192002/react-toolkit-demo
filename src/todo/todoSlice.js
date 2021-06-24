import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push({
                title: action.payload,
                completed: false
            })
        },
        markComplete(state, action) {
            state[action.payload].completed = true
        },
        markIncomplete(state, action) {
            state[action.payload].completed = false
        },
        removeTodo(state, action) {
            delete state[action.payload];
        }
    }
});

export const { addTodo, markComplete, markIncomplete, removeTodo } = todoSlice.actions;
export const TodoReducer = todoSlice.reducer;
