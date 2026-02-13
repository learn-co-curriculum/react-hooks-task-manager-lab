import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  function addTask(newTask) {
    fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then(res => res.json())
      .then(data => setTasks(prev => [...prev, data]));
  }

  function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);

    fetch(`/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    })
      .then(res => res.json())
      .then(updated =>
        setTasks(prev =>
          prev.map(t => (t.id === id ? updated : t))
        )
      );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleComplete,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
