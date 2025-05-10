import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Fetch tasks from backend and set tasks state
        fetch('http://localhost:6001/tasks')
            .then(response => response.json())
            .then(data => {
                console.log('Tasks loaded:', data);
                setTasks(data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const addTask = (title) => {
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            title,
            completed: false
        };

        fetch('http://localhost:6001/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Task added:', data);
                setTasks(prevTasks => [...prevTasks, data]);
            })
            .catch(error => {
                console.error('Error adding task:', error);
            });
    };

    const toggleComplete = (id) => {
        const task = tasks.find(task => task.id === id);
        if (!task) return;

        const updatedTask = { ...task, completed: !task.completed };

        fetch(`http://localhost:6001/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: updatedTask.completed }),
        })
            .then(response => response.json())
            .then(() => {
                console.log('Task updated:', id);
                setTasks(prevTasks =>
                    prevTasks.map(t => t.id === id ? updatedTask : t)
                );
            })
            .catch(error => {
                console.error('Error toggling task:', error);
            });
    };

    // Filter tasks based on search query
    const filteredTasks = tasks.filter(task =>
        task && task.title && task.title.toLowerCase().includes((searchQuery || "").toLowerCase())
    );

    return (
        <TaskContext.Provider value={{
            tasks,
            filteredTasks,
            addTask,
            toggleComplete,
            searchQuery,
            setSearchQuery
        }}>
            {children}
        </TaskContext.Provider>
    );
}