import { useState, useContext, useId } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const inputId = useId();

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ title, completed: false });
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>New Task</label>
      <input
        id={inputId}
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;