import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";

function App() {
// get global statee and updater from context
  const { tasks, setTasks } = useContext(TaskContext);

  //search state
  const [query, setQuery] = useState("");

  //lad tasks from db.json into context on page load
  useEffect(() => {
    fetch('http://localhost:6001/tasks')
    .then(r=>r.json())
    .then(data=>setTasks(data))
    
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar setQuery={setQuery} />
      <TaskList query={query} />
    </div>
  );
}

export default App;
