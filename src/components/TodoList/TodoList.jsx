import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todoList);

    return (
        <section style={{ marginTop: 50 }}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </section>
    );
};

export default TodoList;
