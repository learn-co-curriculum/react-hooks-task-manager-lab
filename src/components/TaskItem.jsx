import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { toggleComplete } = useContext(TaskContext);

  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}
      </span>
      <button data-testid={task.id} onClick={() => toggleComplete(task)}>
        Complete
      </button>
    </div>
  );
}

export default TaskItem;