import { useRef } from "react";
import { useTasks } from "../context/TaskContext";

function SearchBar() {
  const { setSearchTerm } = useTasks();
  const inputRef = useRef();

  function handleChange() {
    setSearchTerm(inputRef.current.value);
  }

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search tasks..."
      onChange={handleChange}
    />
  );
}

export default SearchBar;
