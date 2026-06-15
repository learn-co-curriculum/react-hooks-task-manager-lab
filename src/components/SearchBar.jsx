import React, { useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const searchInputRef = useRef(null);
  const { query, setQuery } = useContext(TaskContext);

  function handleSearch() {
    if (searchInputRef.current) {
      setQuery(searchInputRef.current.value);
    }
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
    </div>
  );
}

export default SearchBar;
