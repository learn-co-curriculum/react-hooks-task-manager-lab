import React, { useRef, useState, useContext, useEffect } from "react";
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  function handleSearch(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
      <TaskList query={query} />
    </div>
  );
}

export default SearchBar;
