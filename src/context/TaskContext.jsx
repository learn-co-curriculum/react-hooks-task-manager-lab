import React, { createContext, useCallback, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Load initial tasks from json-server.
  const fetchTasks = useCallback(async () => {
    const response = await fetch("http://localhost:6001/tasks");
    const data = await response.json();
    setTasks(data);
  }, []);

  // Create a task in the backend and append it locally.
  const addTask = async (title) => {
    const response = await fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    });

    const newTask = await response.json();
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  // Toggle completion in backend, then mirror the change in local state.
  const toggleComplete = async (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (!taskToUpdate) return;

    const response = await fetch(`http://localhost:6001/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !taskToUpdate.completed,
      }),
    });

    const updatedTask = await response.json();

    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === taskId ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        fetchTasks,
        addTask,
        toggleComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
