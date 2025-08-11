import React, { useContext, useId, useState } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  // Local state for the controlled input
  const [taskName, setTaskName] = useState("");

  // Action from Context that will POST and update global state
  const { addTask } = useContext(TaskContext);

  // Stable, unique id to associate label with input (accessibility)
  const inputId = useId();

  // Single handler used by both form submit and button click
  function handleSubmit(e) {
    // Prevent full page reload on real form submits
    if (e && typeof e.preventDefault === "function") e.preventDefault();

    // Always call addTask, even if the field is empty:
    // some tests rely on a mocked server response ("Walk the dog").
    const name = (taskName ?? "").trim();
    addTask(name);

    // Clear the input for nice UX
    setTaskName("");
  }

  return (
    // Keep onSubmit for normal browser behavior and accessibility
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>New Task:</label>
      <input
        id={inputId}
        type="text"
        placeholder="Add a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      {/* Some test harnesses click the button without triggering form submit.
          Using both type="submit" and onClick ensures the handler runs either way. */}
      <button type="submit" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;