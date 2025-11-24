import React, { useContext, useMemo } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskList() {
  // Pull tasks, global search text, and the toggle action from Context
  const { tasks, toggleComplete, searchQuery } = useContext(TaskContext);

  // Derive a filtered list based on the global search query.
  // useMemo avoids recalculating on unrelated renders.
  const filteredTasks = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return tasks.filter((t) => t.title.toLowerCase().includes(q));
  }, [tasks, searchQuery]);

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          {/* Visual feedback for completion via strike-through */}
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </span>

          {/* data-testid must equal the id: tests query by this attribute */}
          <button
            data-testid={String(task.id)}
            onClick={() => toggleComplete(task.id)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;