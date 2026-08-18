import React, { useRef, useState } from "react";
import TaskList from "./TaskList";

function SearchBar() {
  // implement useRef
  const searchRef = useRef()
  const [query, setQuery] = useState("")

  function handleSearch() {
    setQuery(searchRef.current.value);
  }

  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
      <TaskList query={query}/>
    </div>
  );
}

export default SearchBar;