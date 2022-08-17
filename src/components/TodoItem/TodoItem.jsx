import React from "react";
import styles from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, checkTodo } from "../../store/todoSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const { id, todo, completed } = props.todo;

    const notify = () =>
        toast.success("Görev silindi!", {
            autoClose: 1000,
            pauseOnHover: false,
        });

    const handleDelete = () => {
        dispatch(deleteTodo({ id }));
        notify();
    };

    const handleChecked = () => {
        dispatch(checkTodo({ id }));
    };

    return (
        <>
            <div
                className={`${styles["todo-item"]} ${
                    completed ? styles.completed : ""
                }`}
            >
                <input
                    type="checkbox"
                    name="checkTodo"
                    checked={completed}
                    onChange={handleChecked}
                />
                <p>{todo}</p>
                <button onClick={handleDelete}>X</button>
            </div>
        </>
    );
};

export default TodoItem;
