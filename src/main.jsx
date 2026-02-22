import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { TaskProvider } from './context/TaskContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <TaskProvider>
    <App />
  </TaskProvider>
);