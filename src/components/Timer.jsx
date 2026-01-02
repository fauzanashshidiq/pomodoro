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
    <div className="flex flex-col items-center p-8 bg-white border-4 border-retro-dark shadow-retro rounded-xl w-full relative overflow-hidden">
      
      {/* Decorative bolts */}
      <div className="absolute top-2 left-2 w-3 h-3 bg-gray-300 border-2 border-retro-dark rounded-full"></div>
      <div className="absolute top-2 right-2 w-3 h-3 bg-gray-300 border-2 border-retro-dark rounded-full"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 bg-gray-300 border-2 border-retro-dark rounded-full"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 bg-gray-300 border-2 border-retro-dark rounded-full"></div>

      {/* Active Task Display */}
      <div className="mb-6 minimum-height-10 min-h-[2.5rem] flex items-center justify-center w-full bg-retro-dark bg-opacity-5 rounded border-2 border-dashed border-retro-dark">
        {activeTaskName ? (
           <div className="text-retro-blue font-bold text-lg flex items-center gap-2 px-4 animate-pulse">
             <span className="text-xs uppercase tracking-wider text-retro-red">TARGET:</span>
             <span className="truncate max-w-[200px]">{activeTaskName}</span>
           </div>
        ) : (
          <div className="text-gray-400 font-mono text-sm uppercase">Select Mission Below</div>
        )}
      </div>

      {/* Mode Buttons */}
      <div className="flex gap-3 mb-6 w-full justify-center">
        <button
          onClick={() => handleModeChange('pomodoro')}
          className={`flex-1 px-2 py-1 text-sm rounded border-2 border-retro-dark transition font-bold uppercase tracking-wider ${
            activeMode === 'pomodoro' 
              ? 'bg-retro-red text-white shadow-retro-sm translate-y-[-2px]' 
              : 'bg-white text-retro-dark hover:bg-gray-100'
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => handleModeChange('short')}
          className={`flex-1 px-2 py-1 text-sm rounded border-2 border-retro-dark transition font-bold uppercase tracking-wider ${
            activeMode === 'short' 
              ? 'bg-retro-blue text-white shadow-retro-sm translate-y-[-2px]' 
              : 'bg-white text-retro-dark hover:bg-gray-100'
          }`}
        >
          Short Break
        </button>
        <button
          onClick={() => handleModeChange('long')}
          className={`flex-1 px-2 py-1 text-sm rounded border-2 border-retro-dark transition font-bold uppercase tracking-wider ${
            activeMode === 'long' 
              ? 'bg-retro-yellow text-retro-dark shadow-retro-sm translate-y-[-2px]' 
              : 'bg-white text-retro-dark hover:bg-gray-100'
          }`}
        >
          Long Break
        </button>
      </div>

      <div className="relative mb-8 bg-retro-dark text-retro-yellow px-8 py-4 rounded border-4 border-retro-dark shadow-inner w-full flex justify-center">
        <div className="text-6xl font-bold font-mono tracking-widest relative z-10">
            {formatTime(timeLeft)}
        </div>
        {/* shine effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white opacity-10 rounded-t"></div>
      </div>

      <div className="flex gap-4 w-full">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="flex-1 px-6 py-3 bg-retro-red text-white border-2 border-retro-dark hover:bg-red-500 rounded font-bold transition text-xl uppercase tracking-wide shadow-retro active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
          >
            Start
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="flex-1 px-6 py-3 bg-retro-yellow text-retro-dark border-2 border-retro-dark hover:bg-yellow-400 rounded font-bold transition text-xl uppercase tracking-wide shadow-retro active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
          >
            Pause
          </button>
        )}
        <button
          onClick={() => resetTimer()}
          className="px-4 py-3 bg-white text-retro-dark border-2 border-retro-dark hover:bg-gray-100 rounded font-bold transition shadow-retro active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Timer;

