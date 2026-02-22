import React, { useRef } from "react";

function SearchBar({ setQuery }) {
  const searchRef = useRef();

  const handleSearch = () => {
    setQuery(searchRef.current.value);
  };

  return (
    <div className ="search-container">
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