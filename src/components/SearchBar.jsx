import React, { useRef, useState, useContext } from "react";
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const { setSearchTerm } = useContext(TaskContext);
  const searchRef = useRef();

  function handleSearch(e) {
    setSearchTerm(searchRef.current.value);
  }

  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearch}
      />
      <TaskList />
    </div>
  );
}

export default SearchBar;
