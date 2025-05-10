import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
    const { toggleComplete } = useContext(TaskContext);

    return (
        <div data-testid={`task-${task.id}`}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
            </span>
            <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
        </div>
    );
};

export default TaskItem;
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
    const { toggleComplete } = useContext(TaskContext);

    return (
        <div data-testid={`task-${task.id}`}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
            </span>
            <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
        </div>
    );
};

export default TaskItem;