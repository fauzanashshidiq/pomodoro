const TaskItem = ({ task, toggleTask, addSession, deleteTask, isActive, selectActiveTask }) => {
  return (
    <div
      className={`relative flex items-center justify-between w-full max-w-md p-4 mb-2 rounded shadow transition ${
        isActive 
          ? 'bg-gray-800 border-2 border-blue-500' 
          : 'bg-gray-700 border-2 border-transparent hover:border-gray-600'
      } ${task.completed ? 'opacity-60' : ''}`}
    >
      {/* Click handler for selection (except buttons) */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={() => selectActiveTask(task.id)}
        title="Click to set as active task"
      ></div>

      <div className="flex items-center gap-3 flex-1 overflow-hidden z-10">
        <button
          onClick={(e) => { e.stopPropagation(); toggleTask(task.id); }}
          className={`w-6 h-6 rounded border flex items-center justify-center transition ${
            task.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-500 hover:border-blue-500'
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
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>
        <span
          className={`text-lg truncate cursor-pointer ${
            task.completed ? 'line-through text-gray-400' : 'text-white'
          }`}
        >
          {task.text}
        </span>
        {isActive && (
          <span className="text-xs bg-blue-600 px-2 py-0.5 rounded text-white font-bold ml-2">
            Active
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 ml-4 z-10">
        <div className="flex items-center bg-gray-900 rounded px-2 py-1 text-sm">
          <span className="text-gray-400 mr-1">Sessions:</span>
          <span className="font-bold text-white">{task.sessions}</span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); addSession(task.id); }}
          title="Add Session"
          className="p-2 text-yellow-500 hover:text-yellow-400 hover:bg-gray-600 rounded transition"
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
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
          title="Delete Task"
          className="p-2 text-red-500 hover:text-red-400 hover:bg-gray-600 rounded transition"
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
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
