import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  // Pulls the addTask function from TaskContext
  const {addTask} = useContext(TaskContext)

  const inputId = useId()

  async function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return;

    // creates the new task
    await addTask({
      title: taskName,
      completed: false,
    })

    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>New Task:</label>
      <input
        id={inputId}
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;