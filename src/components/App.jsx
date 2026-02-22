import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <SearchBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;