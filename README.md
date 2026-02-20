## Task Manager App
This is a simple Task Manager application built using React. The app allows users to add tasks, mark tasks as complete, undo completed tasks, and search through tasks. It uses React Context for global state management and connects to a local db.json file using a JSON server.

## What The Project Does
This project allows users to manage daily tasks in a simple and organized way. Users can add new tasks using the input form. When a task is added, it is saved to the database and immediately displayed on the screen.

Users can mark a task as complete by clicking the complete button. When a task is completed, it gets a line-through style to show that it is done. The task status is also updated in the database.

Users can also undo a completed task. This changes the task back to incomplete and updates both the page and the database.

The app includes a search feature. As the user types in the search bar, the task list automatically filters and only shows tasks that match the search text.

## Global State Management
The project uses React’s useContext to manage global state.

A TaskProvider component is created inside TaskContext.jsx. This provider stores all tasks and shares them across the entire application.

The following functions are handled inside the context:

# addTask – Adds a new task to the database and updates the page.

# toggleComplete – Marks a task as complete or incomplete and updates the database.

# tasks – Stores all tasks globally.

The entire application is wrapped with TaskProvider inside main.jsx so that all components can access the global state.

## Features Implemented
# Add Task
Users can type a task into the input field and submit it. The app uses useId to properly connect the label and input. The task is saved to the database using a POST request and added to the global state.

# Mark Task as Complete
Users can click the complete button next to a task. The app sends a PATCH request to update the task’s completed status in the database. The UI updates immediately to reflect the change.

# Undo Task
If a task is already completed, clicking the button again will undo it. The task returns to normal styling and the database updates accordingly.

Search Tasks
Users can search tasks using the search bar. As they type, the app filters tasks in real time and only displays matching results.