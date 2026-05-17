



import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  
  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  
  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
}
