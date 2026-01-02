const TaskItem = ({ task, toggleTask, deleteTask, isActive, selectActiveTask }) => {
  return (
    <div
      className={`relative flex items-center justify-between w-full p-4 mb-2 rounded border-2 border-retro-dark transition-all ${
        isActive 
          ? 'bg-retro-yellow shadow-retro text-retro-dark transform -translate-y-1' 
          : 'bg-white shadow-sm hover:shadow-retro-sm hover:-translate-y-0.5'
      } ${task.completed ? 'opacity-70 bg-gray-100' : ''}`}
    >
      {/* Click handler for selection (except buttons) */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={() => selectActiveTask(task.id)}
        title="Click to toggle selection"
      ></div>

      <div className="flex items-center gap-3 flex-1 overflow-hidden z-10">
        <button
          onClick={(e) => { e.stopPropagation(); toggleTask(task.id); }}
          className={`w-6 h-6 rounded border-2 flex items-center justify-center transition ${
            task.completed
              ? 'bg-green-500 border-retro-dark'
              : 'border-retro-dark bg-white hover:bg-green-100'
          }`}
        >
          {task.completed && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>
        <span
          className={`text-lg truncate cursor-pointer font-bold ${
            task.completed ? 'line-through text-gray-500 decoration-4 decoration-retro-red' : 'text-retro-dark'
          }`}
        >
          {task.text}
        </span>
        {isActive && (
          <span className="text-xs bg-retro-red border border-retro-dark px-2 py-0.5 rounded text-white font-bold ml-2 uppercase shadow-sm">
            Active
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 ml-4 z-10">
        <div className="flex items-center bg-retro-dark rounded border border-retro-dark px-2 py-1 text-sm shadow-sm">
          <span className="text-retro-cream mr-1 text-xs uppercase">Sess:</span>
          <span className="font-bold text-retro-yellow font-mono">{task.sessions}</span>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
          title="Delete Task"
          className="p-1.5 text-white bg-retro-red border-2 border-retro-dark hover:bg-red-600 rounded transition shadow-sm active:translate-y-[1px]"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
