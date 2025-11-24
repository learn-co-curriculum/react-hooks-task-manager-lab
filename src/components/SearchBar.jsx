import React, { useContext, useEffect, useRef } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function SearchBar() {
  // Global search text lives in Context so TaskList can react immediately
  const { searchQuery, setSearchQuery } = useContext(TaskContext);

  // Keep a persistent handle to the input DOM node without causing re-renders
  const inputRef = useRef(null);

  useEffect(() => {
    // Autofocus the search input on mount (nice UX, also shows useRef in action)
    inputRef.current?.focus();
  }, []);

  function handleChange(e) {
    // Store the query globally -> TaskList will filter as the user types
    setSearchQuery(e.target.value);

    // Example of storing arbitrary, non-reactive data on the ref
    if (inputRef.current) inputRef.current.currentValue = e.target.value;
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
