# Task Manager Lab

A React task manager app that demonstrates standard hooks in a realistic workflow:
- useContext for shared task state
- useId for accessible task form input labeling
- useRef for search input handling

## Description
This app loads tasks from a local JSON backend, allows users to add tasks, toggle completion, and filter tasks by search text.

## Features
- Load tasks from backend through context
- Add tasks from a form
- Toggle task completion state
- Filter visible tasks as the user types

## Hook Usage
- useContext: Task state and actions are provided globally by TaskProvider in TaskContext
- useId: The new task input is linked to its label with a stable generated id
- useRef: Search input value is read through a ref and synced into context query state

## Screenshot
App screenshot path:

![Task Manager Screenshot](docs/app-screenshot.png)

## Tech Stack
- React
- Vite
- JSON Server
- Vitest + Testing Library

## Getting Started
1. Install dependencies:

```sh
npm install
```

2. Start backend server:

```sh
npm run server
```

3. Start frontend dev server:

```sh
npm run dev
```

4. Run tests:

```sh
npm run test
```

## Scripts
- npm run dev: Start Vite app
- npm run server: Start JSON server on port 6001
- npm run test: Run test suite

## Project Structure
- src/context/TaskContext.jsx: Global task state and actions
- src/components/TaskForm.jsx: Add task form using useId
- src/components/SearchBar.jsx: Search input using useRef
- src/components/TaskList.jsx: Render and toggle filtered tasks
- src/main.jsx: App bootstrap wrapped with TaskProvider

## Test Status
All provided tests are passing.

## License
This project is for educational use in the lab environment.
