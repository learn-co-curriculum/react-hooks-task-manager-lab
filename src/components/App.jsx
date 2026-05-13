import { useState } from "react";
import SearchBar from "./SearchBar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <h1>Task Manager</h1>

      <TaskForm />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <TaskList searchTerm={searchTerm} />
    </main>
  );
}

export default App;