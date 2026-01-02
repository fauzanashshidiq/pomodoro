import { useState } from 'react';

const Timer = ({ timeLeft, isRunning, startTimer, pauseTimer, resetTimer, activeTaskName }) => {
  const [activeMode, setActiveMode] = useState('pomodoro');

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    let duration;
    switch (mode) {
      case 'pomodoro':
        duration = 25 * 60;
        break;
      case 'short':
        duration = 5 * 60;
        break;
      case 'long':
        duration = 15 * 60;
        break;
      default:
        duration = 25 * 60;
    }
    resetTimer(duration);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg mb-6 w-full max-w-md">
      
      {/* Active Task Display */}
      <div className="mb-4 h-8 flex items-center justify-center w-full">
        {activeTaskName ? (
           <div className="text-blue-300 font-medium text-lg animate-pulse flex items-center gap-2">
             <span className="opacity-70 text-sm uppercase tracking-wider">Focusing on:</span>
             <span className="font-bold text-white max-w-[200px] truncate">{activeTaskName}</span>
           </div>
        ) : (
          <div className="text-gray-500 italic text-sm">Select a task below to focus</div>
        )}
      </div>

      {/* Mode Buttons */}
      <div className="flex gap-2 mb-6 w-full justify-center">
        <button
          onClick={() => handleModeChange('pomodoro')}
          className={`flex-1 px-3 py-1 text-sm rounded transition font-bold ${
            activeMode === 'pomodoro' 
              ? 'bg-red-500 text-white shadow' 
              : 'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => handleModeChange('short')}
          className={`flex-1 px-3 py-1 text-sm rounded transition font-bold ${
            activeMode === 'short' 
              ? 'bg-teal-500 text-white shadow' 
              : 'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          Short
        </button>
        <button
          onClick={() => handleModeChange('long')}
          className={`flex-1 px-3 py-1 text-sm rounded transition font-bold ${
            activeMode === 'long' 
              ? 'bg-blue-500 text-white shadow' 
              : 'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          Long
        </button>
      </div>

      <div className="text-7xl font-bold mb-8 font-mono text-white tracking-widest relative">
        {formatTime(timeLeft)}
      </div>

      <div className="flex gap-4 w-full">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="flex-1 px-6 py-3 bg-white text-gray-900 hover:bg-gray-200 rounded font-bold transition text-lg uppercase tracking-wide"
          >
            Start
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded font-bold transition text-lg uppercase tracking-wide"
          >
            Pause
          </button>
        )}
        <button
          onClick={() => resetTimer()}
          className="px-6 py-3 border-2 border-gray-600 hover:border-gray-500 text-gray-400 hover:text-white rounded font-bold transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Timer;
