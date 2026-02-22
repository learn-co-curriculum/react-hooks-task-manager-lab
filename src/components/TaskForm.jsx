import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const taskInputId = useId();

  async function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return;
    await addTask(taskName);
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={taskInputId}>New Task:</label>
      <input
        id={taskInputId}
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
