import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:6001/tasks')
        .then(r=>r.json())
        .then(data=>setTasks(data))
    }, []);

    // Create toggle complete function
    const toggleComplete = async(id) => {
        // find the task
        const task = tasks.find((task) => task.id === id)
        // change it in db.json
        await fetch(`http://localhost:6001/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                completed: !task.completed,
            }),
        })
        // change it on page
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
            task.id === id
            ? {...task, completed: !task.completed}
            : task
            )
        )
    }

    // Add Task function
    const addTask = async (newTask) => {
        // create new task
        const response = await fetch('http://localhost:6001/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
        // gets newly created task back from server
        const task = await response.json()
        // adds new task to the page
        setTasks((currentTasks) => [...currentTasks, task])
    }


    return(
        <TaskContext.Provider value={{tasks, toggleComplete, addTask}}>
            {children}
        </TaskContext.Provider>
    )
}