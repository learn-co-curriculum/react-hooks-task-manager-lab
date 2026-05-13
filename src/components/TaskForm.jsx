import { useId, useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const inputId = useId();
  const { addTask } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>New Task</label>
      <input
        id={inputId}
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;