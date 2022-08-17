import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lastId: 2,
    todoList: [
        { id: 1, todo: "Lorem ipsum", completed: false },
        { id: 2, todo: "Lorem ipsum", completed: true },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            state.lastId++;
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(
                (item) => item.id !== action.payload.id
            );
        },
        checkTodo: (state, action) => {
            state.todoList = state.todoList.map((item) => {
                if (item.id !== action.payload.id) {
                    return item;
                }

                item.completed = !item.completed;
                return item;
            });
        },
        cleanTodos: (state) => {
            state.todoList = [
                { id: 1, todo: "Lorem ipsum", completed: false },
                { id: 2, todo: "Lorem ipsum", completed: true },
            ];
            state.lastId = 2;
        },
    },
});

export const { addTodo, deleteTodo, checkTodo, cleanTodos } = todoSlice.actions;
export default todoSlice.reducer;
