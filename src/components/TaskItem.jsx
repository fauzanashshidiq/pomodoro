const TaskItem = ({ task, toggleTask, addSession, deleteTask }) => {
  return (
    <div
      className={`flex items-center justify-between w-full max-w-md p-4 mb-2 rounded shadow transition ${
        task.completed ? 'bg-gray-800 opacity-60' : 'bg-gray-700'
      }`}
    >
      <div className="flex items-center gap-3 flex-1 overflow-hidden">
        <button
          onClick={() => toggleTask(task.id)}
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
          className={`text-lg truncate ${
            task.completed ? 'line-through text-gray-400' : 'text-white'
          }`}
        >
          {task.text}
        </span>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <div className="flex items-center bg-gray-900 rounded px-2 py-1 text-sm">
          <span className="text-gray-400 mr-1">Sessions:</span>
          <span className="font-bold text-white">{task.sessions}</span>
        </div>
        <button
          onClick={() => addSession(task.id)}
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
          onClick={() => deleteTask(task.id)}
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
