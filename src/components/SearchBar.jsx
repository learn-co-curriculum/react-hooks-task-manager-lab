import React, { useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const { setSearchQuery } = useContext(TaskContext);
  const searchRef = useRef(null);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearch}
        ref={searchRef}
      />
    </div>
  );
}

export default SearchBar;