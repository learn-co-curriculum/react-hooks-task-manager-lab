import React, { useRef } from "react";
import { useTasks } from "../context/TaskContext";

function SearchBar() {
  const searchRef = useRef();

  const { setSearchTerm } = useTasks();

  function handleSearch() {
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
    </div>
  );
}

export default SearchBar;