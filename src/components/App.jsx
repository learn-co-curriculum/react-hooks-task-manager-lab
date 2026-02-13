import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
      <TaskList />
    </div>
  );
}

export default App;
