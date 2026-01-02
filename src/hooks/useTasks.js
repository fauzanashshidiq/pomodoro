import { useState, useEffect } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('pomodoro_data');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeTaskId, setActiveTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem('pomodoro_data', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      sessions: 0,
    };
    setTasks((prev) => [...prev, newTask]);
    // Auto-select if it's the first task
    if (tasks.length === 0) setActiveTaskId(newTask.id);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addSession = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, sessions: task.sessions + 1 } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    if (activeTaskId === id) setActiveTaskId(null);
  };

  const selectActiveTask = (id) => { setActiveTaskId((prev) => (prev === id ? null : id)); };

  return { tasks, activeTaskId, addTask, toggleTask, addSession, deleteTask, selectActiveTask };
};

export default useTasks;

