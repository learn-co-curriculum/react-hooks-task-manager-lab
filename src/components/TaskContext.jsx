import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  
  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks(prev => [...prev, newTask]);

    fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
  }

  
  function toggleComplete(id) {
    const updated = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updated);

    const task = updated.find(t => t.id === id);

    fetch(`http://localhost:6001/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: task.completed }),
    });
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
}