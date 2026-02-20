import React, { useState, useId, useContext, useRef, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const userid = useId();
  const inputRef = useRef(null)

    const { addTask } = useContext(TaskContext);


  function handleSubmit(e) {
    e.preventDefault();

    addTask(taskName)
    if (taskName.trim() === "") return;
    setTaskName("");
  }
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={userid}>New Task:</label>
      <input
      ref={inputRef}
        id={userid}
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
