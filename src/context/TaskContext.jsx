import React, { createContext, useEffect, useMemo, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
	const [tasks, setTasks] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		fetch("http://localhost:6001/tasks")
			.then((response) => response.json())
			.then((data) => {
				// Preserve user updates if they happen before initial fetch resolves.
				setTasks((currentTasks) => (currentTasks.length > 0 ? currentTasks : data));
			});
	}, []);

	async function addTask(title) {
		const response = await fetch("http://localhost:6001/tasks", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title, completed: false }),
		});

		const newTask = await response.json();
		setTasks((currentTasks) => [...currentTasks, newTask]);
	}

	async function toggleComplete(taskId) {
		const taskToUpdate = tasks.find((task) => task.id === taskId);
		if (!taskToUpdate) return;

		const response = await fetch(`http://localhost:6001/tasks/${taskId}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ completed: !taskToUpdate.completed }),
		});

		const updatedTask = await response.json();
		setTasks((currentTasks) =>
			currentTasks.map((task) =>
				task.id === updatedTask.id ? updatedTask : task
			)
		);
	}

	const filteredTasks = useMemo(
		() =>
			tasks.filter((task) =>
				task.title.toLowerCase().includes(query.toLowerCase())
			),
		[tasks, query]
	);

	const value = {
		tasks,
		query,
		setQuery,
		addTask,
		toggleComplete,
		filteredTasks,
	};

	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
