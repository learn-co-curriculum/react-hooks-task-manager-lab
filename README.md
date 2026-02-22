# Task Manager (React Hooks Lab)

## Description
This project is a small Task Manager app built with React and `json-server`.
It demonstrates three standard React hooks in one workflow:
- `useContext` for global task state
- `useId` for accessible form labeling
- `useRef` for a persistent search input reference

Users can:
- Load tasks from the backend
- Add a task
- Mark a task complete or undo completion
- Filter tasks with live search

## Features
- Global state management with `TaskProvider`
- Backend integration using `GET`, `POST`, and `PATCH`
- Accessible task form with `label`/`input` ID pairing from `useId`
- Search UI implemented with `useRef` and controlled filtering

## Tech Stack
- React
- Vite
- Vitest + Testing Library
- json-server

## Getting Started
1. Install dependencies:
```sh
npm install
```
2. Start the frontend:
```sh
npm run dev
```
3. Start the backend (in another terminal):
```sh
npm run server
```
4. Run tests:
```sh
npm run test
```

## Project Structure
- `src/context/TaskContext.jsx`: global task state and API actions
- `src/components/App.jsx`: app shell and initial task loading
- `src/components/TaskForm.jsx`: add-task form with `useId`
- `src/components/SearchBar.jsx`: search input with `useRef`
- `src/components/TaskList.jsx`: filtered task rendering and completion toggle

## Screenshot
Add your screenshot image to the repo (for example: `docs/task-manager.png`) and keep/update this markdown:

![Task Manager app screenshot](docs/task-manager.png)

## Testing
The required behaviors are covered by the provided test suite in `src/__tests__/test_suites/Hooks.test.jsx`.

## Author
Your Name
