import useTimer from './hooks/useTimer';
import useTasks from './hooks/useTasks';
import Timer from './components/Timer';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import { useCallback } from 'react';

function App() {
  const { tasks, activeTaskId, addTask, toggleTask, addSession, deleteTask, selectActiveTask } = useTasks();

  const handleTimerComplete = useCallback(() => {
    if (activeTaskId) {
      addSession(activeTaskId);
    }
  }, [activeTaskId, addSession]);

  const { timeLeft, isRunning, startTimer, pauseTimer, resetTimer } = useTimer(undefined, handleTimerComplete);

  const activeTask = tasks.find(t => t.id === activeTaskId);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Pomodoro Focus</h1>
      
      <Timer
        timeLeft={timeLeft}
        isRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
        activeTaskName={activeTask ? activeTask.text : null}
      />

      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-300">Tasks</h2>
        
        <TaskInput onAdd={addTask} />

        <div className="flex flex-col gap-2">
          {tasks.length === 0 && (
            <p className="text-gray-500 text-center mt-4 italic">No tasks yet. Add one to get started!</p>
          )}
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              addSession={addSession}
              deleteTask={deleteTask}
              isActive={task.id === activeTaskId}
              selectActiveTask={selectActiveTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
