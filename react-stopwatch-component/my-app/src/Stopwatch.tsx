import { BsCaretRightFill, BsFillPauseFill } from 'react-icons/bs';
import './Stopwatch.css';
import { useState } from 'react';

export function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handleWatchClick() {
    if (!isRunning) {
      setCount(0);
    }
  }

  function handleStart() {
    if (isRunning) {
      clearInterval(intervalId);
      // setIntervalId(undefined);
    } else {
      const id = setInterval(() => setCount((prev) => prev + 1), 1000);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  }

  return (
    <div>
      <div className="circle" onClick={handleWatchClick}>
        <p className="counter">{count}</p>
      </div>
      {isRunning ? (
        <BsFillPauseFill onClick={handleStart} />
      ) : (
        <BsCaretRightFill onClick={handleStart} />
      )}
    </div>
  );
}
