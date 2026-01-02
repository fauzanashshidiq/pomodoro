import { useState, useEffect, useRef } from 'react';

const useTimer = (defaultTime = 25 * 60) => {
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(defaultTime);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert("Pomodoro session finished!");
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  return { timeLeft, isRunning, startTimer, pauseTimer, resetTimer };
};

export default useTimer;
