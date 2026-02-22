import React, { useState } from "react";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm />
      <div className ="search-container">
      <SearchBar setQuery={setQuery} />
      </div>
      <TaskList query={query} />
    </div>
  );
}

export default App;