import React, { useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    // নতুন টাস্ক যোগ করা
    const addTodo = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setTodos([...todos, { id: Date.now(), task, completed: false }]);
            setTask("");
        }
    };

    // টাস্ক রিমুভ করা
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // টাস্ক সম্পন্ন করা
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`todo-item ${todo.completed ? "completed" : ""}`}
                    >
                        <span onClick={() => toggleComplete(todo.id)}>
                            {todo.task}
                        </span>
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
