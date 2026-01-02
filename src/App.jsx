import useTimer from './hooks/useTimer';
import useTasks from './hooks/useTasks';
import Timer from './components/Timer';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

function App() {
  const { timeLeft, isRunning, startTimer, pauseTimer, resetTimer } = useTimer();
  const { tasks, addTask, toggleTask, addSession, deleteTask } = useTasks();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Pomodoro Focus</h1>
      
      <Timer
        timeLeft={timeLeft}
        isRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />

      <TaskInput onAdd={addTask} />

      <div className="w-full max-w-md flex flex-col gap-2">
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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
