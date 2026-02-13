import { useTasks } from "../context/TaskContext";

function TaskList() {
  const { tasks, toggleComplete, searchTerm } = useTasks();

  const filteredTasks = tasks.filter(task =>
  task.title.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>

            <button
             data-testid={task.id}
             onClick={() => toggleComplete(task.id)}
              >
              {task.completed ? "Undo" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
