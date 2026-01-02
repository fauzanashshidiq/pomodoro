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
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      {/* Title with retro shadow text effect */}
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-retro-yellow" 
          style={{ textShadow: '4px 4px 0px #1d3557, -1px -1px 0 #1d3557, 1px -1px 0 #1d3557, -1px 1px 0 #1d3557, 1px 1px 0 #1d3557' }}>
        POMO-GEAR
      </h1>
      
      <Timer
        timeLeft={timeLeft}
        isRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
        activeTaskName={activeTask ? activeTask.text : null}
      />

      <div className="w-full max-w-md mt-6">
        <div className="bg-white border-4 border-retro-dark shadow-retro p-6 rounded-xl relative">
            <h2 className="text-2xl font-bold mb-4 text-retro-dark flex items-center gap-2">
                <span>TASKS</span>
                <div className="flex-1 h-1 bg-retro-dark rounded"></div>
            </h2>
            
            <TaskInput onAdd={addTask} />

            <div className="flex flex-col gap-3 mt-4">
            {tasks.length === 0 && (
                <p className="text-retro-dark opacity-60 text-center mt-2 italic font-mono">Mission Log Empty...</p>
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
    </div>
  );
}

export default App;
