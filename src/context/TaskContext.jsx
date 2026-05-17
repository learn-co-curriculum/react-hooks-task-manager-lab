import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((r) => r.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  function addTask(text) {
    const newTask = {
  title: text,
  completed: false,
};

    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((r) => r.json())
      .then((createdTask) => {
        setTasks([...tasks, createdTask]);
      });
  }

  function toggleComplete(taskToUpdate) {
    fetch(`http://localhost:3001/tasks/${taskToUpdate.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !taskToUpdate.completed,
      }),
    })
      .then((r) => r.json())
      .then((updatedTask) => {
        setTasks(
          tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        );
      });
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        searchTerm,
        setSearchTerm,
        addTask,
        toggleComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  return useContext(TaskContext);
}

export { TaskProvider, useTasks };