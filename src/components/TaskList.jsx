import { useContext, useRef, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  const searchRef = useRef();
  const [search, setSearch] = useState("");

  // Update search state when user types
  useEffect(() => {
    const input = searchRef.current;
    function handleInput() {
      setSearch(input.value);
    }
    input.addEventListener("input", handleInput);
    return () => input.removeEventListener("input", handleInput);
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        ref={searchRef}
        placeholder="Search tasks..."
        defaultValue=""
      />
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;