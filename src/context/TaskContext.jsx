import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext({
    tasks: [],
    addTask: () => {},
    toggleComplete: () => {},
    searchTerm: "",
    setSearchTerm: () => {}
});

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('http://localhost:6001/tasks')
            .then(r => r.json())
            .then(data => setTasks(data));
    }, []);

    function addTask(newTask) {
        fetch('http://localhost:6001/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        })
        .then(r => r.json())
        .then(task => setTasks(prev => [...prev, task]));
    }

    function toggleComplete(id) {
        const task = tasks.find(t => t.id === id);

        fetch(`http://localhost:6001/tasks/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !task.completed })
        })
        .then(r => r.json())
        .then(updatedTask => setTasks(prev => prev.map(t => t.id === id ? updatedTask : t)));
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleComplete, searchTerm, setSearchTerm }}>
            {children}
        </TaskContext.Provider>
    );
}
