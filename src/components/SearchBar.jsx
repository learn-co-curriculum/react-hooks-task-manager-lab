import React, { useRef } from "react";


function SearchBar({setQuery}) {
  const searchRef = useRef("");  

  function handleSearch(e) {
    const value = e.target.value;
    searchRef.current = value;
    setQuery(value); 
  }


  return (
  
      <input
        type="text"
        placeholder="Search tasks..."

        onChange={handleSearch}
      />

  );
}

export default SearchBar;
