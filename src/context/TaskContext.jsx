import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    function toggleComplete(id, currentStatus) {
        fetch(`http://localhost:6001/tasks/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !currentStatus })
        })
            .then(r => r.json())
            .then(updatedTask => {
                setTasks(prev => prev.map(task => (task.id === id ? updatedTask : task)))
            });
    }

    function addTask(taskTitle) {
        fetch("http://localhost:6001/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: taskTitle,
                completed: false
            })
        })
            .then(r => r.json())
            .then(savedTask => {
                setTasks(prevTasks => [...prevTasks, savedTask])
            })
    }

    return (
        < TaskContext.Provider value={{ tasks, setTasks, toggleComplete, addTask }} >
            {children}
        </TaskContext.Provider>
    )
}
