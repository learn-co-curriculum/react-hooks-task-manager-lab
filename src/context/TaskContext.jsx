import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  function addTask(title) {
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((newTask) => {
        setTasks((currentTasks) => [...currentTasks, newTask]);
      });
  }

  function toggleComplete(task) {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks((currentTasks) =>
          currentTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        );
      });
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}