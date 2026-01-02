import { useState, useEffect } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('pomodoro_data');
    return saved ? JSON.parse(saved) : [];
  });

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
  };

  return { tasks, addTask, toggleTask, addSession, deleteTask };
};

export default useTasks;
