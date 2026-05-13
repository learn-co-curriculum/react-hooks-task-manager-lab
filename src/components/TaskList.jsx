import { useTasks } from "../context/TaskContext";

function TaskList({ searchTerm }) {
  const { tasks, toggleComplete } = useTasks();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>

          <button
            data-testid={String(task.id)}
            onClick={() => toggleComplete(task)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;