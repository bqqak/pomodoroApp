import { useState, useRef, useEffect } from "react";
import styles from "./MainFunctionality.module.css";
import CountingSessions from "./CountingSessions";

function MainFunctionality({ onBreakChange }) {
  const [time, setTime] = useState(
    Number(localStorage.getItem("time")) || 50 * 60
  );
  const [isRunning, setIsRunning] = useState(
    localStorage.getItem("isRunning") === "true"
  );

  const [isBreak, setIsBreak] = useState(
    localStorage.getItem("isBreak") === "true"
  );

  const [count, setCount] = useState(
    Number(localStorage.getItem('countSessions')) || 0
  )
  const intervalRef = useRef(null);

  const workTime = 50 * 60;
  const breakTime = 10 * 60;

  useEffect(() => {
    if (onBreakChange) {
      onBreakChange(isBreak);
    }
  }, [isBreak, onBreakChange]);

  function timerRun() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            clearInterval(intervalRef.current);
            if (isBreak) {
              setIsBreak(false);
              setTime(workTime);
            } else {
              setIsBreak(true);
              setTime(breakTime);
              
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            clearInterval(intervalRef.current);
            if (isBreak) {
              setIsBreak(false);
              setTime(workTime);
            } else {
              setIsBreak(true);
              setTime(breakTime);
              setCount(count + 1); 
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isBreak, workTime, breakTime]);

  useEffect(() => {
    localStorage.setItem("time", time);
    localStorage.setItem("isRunning", isRunning);
    localStorage.setItem("isBreak", isBreak);
    localStorage.setItem('countSessions', count)
  }, [time, isRunning, isBreak, count]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const resetTimer = () => {
    setTime(workTime);
    setIsRunning(false);
    setIsBreak(false);
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className={`${styles.secondWindow}`}>
          <p className="text-9xl text-white">{formatTime(time)}</p>
          <div className="flex gap-4 mt-8">
            <button
              className={`border bg-white ${styles.btn}`}
              onClick={timerRun}
            >
              {isRunning ? "Pause" : "Start"}
            </button>
            <button
              className={`border bg-white ${styles.btn}`}
              onClick={resetTimer}
            >
              Reset
            </button>
          </div>
          <p className="text-white text-xl mt-4">
            {isBreak ? "Break Time" : "Work Time"}
          </p>
        </div>
        
      </div>
     <button onClick={() => setCount(0)} className={`text-3xl ${styles.btnSessions}`} >Clear Sessions</button>
     <div className="w-auto h-0.5 bg-gray-400 mt-4 mb-4"></div>
     {count == 0 ? <p className="text-2xl ml-5 text-amber-200">No Sessions</p> : <CountingSessions counter={localStorage.getItem('countSessions')} />}
   
    </>
  );
}
export default MainFunctionality;
