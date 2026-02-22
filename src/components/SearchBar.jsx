import React, { useRef, useState } from "react";
import TaskList from "./TaskList";

function SearchBar() {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);
  const latestQueryRef = useRef("");

  function handleSearch(e) {
    latestQueryRef.current = e.target.value;
    setQuery(latestQueryRef.current);
  }


  return (
    <div>
      <input
        ref={searchInputRef}
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
