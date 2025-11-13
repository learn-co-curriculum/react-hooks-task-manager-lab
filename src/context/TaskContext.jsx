import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  //mark task complete or incomplete
  async function toggleComplete(id) {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;

    const updatedTask = {
      ...taskToUpdate,
      completed: !taskToUpdate.completed,
    };

    // update page
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? updatedTask : task
      )
    );

    // update db.json
    await fetch(`http://localhost:6001/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: updatedTask.completed }),
    });
  }

  //create a new task (only updates)
  function addTask(title) {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, toggleComplete, addTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
