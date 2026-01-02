import { useState, useEffect, useRef } from 'react';

const useTimer = (defaultTime = 25 * 60) => {
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [initialTime, setInitialTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  
  const resetTimer = (newDuration = null) => {
    setIsRunning(false);
    if (newDuration !== null) {
      setInitialTime(newDuration);
      setTimeLeft(newDuration);
    } else {
      setTimeLeft(initialTime);
    }
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert("Time is up!");
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  return { timeLeft, isRunning, startTimer, pauseTimer, resetTimer };
};

export default useTimer;
