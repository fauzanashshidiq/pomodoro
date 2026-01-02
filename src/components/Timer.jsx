const Timer = ({ timeLeft, isRunning, startTimer, pauseTimer, resetTimer }) => {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg mb-6 w-full max-w-md">
      <div className="text-6xl font-bold mb-6 font-mono text-white">
        {formatTime(timeLeft)}
      </div>
      <div className="flex gap-4">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-bold transition"
          >
            Start
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded font-bold transition"
          >
            Pause
          </button>
        )}
        <button
          onClick={resetTimer}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-bold transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
