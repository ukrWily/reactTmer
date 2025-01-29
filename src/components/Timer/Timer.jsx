import "./Timer.css";
import logo from "../../logo.svg";
import { useEffect, useState, useRef } from "react";

const userCount = localStorage.getItem("timer");

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [classBtn, setClassBtn] = useState("start");

  const counterId = useRef(null);

  const handleStart = () => {
    setIsCounting(true);
    setClassBtn("stop");

    counterId.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const handleStop = () => {
    setIsCounting(false);

    clearInterval(counterId.current);
    setClassBtn("start");
  };

  const handleReset = () => {
    setIsCounting(false);
    setCount(0);

    clearInterval(counterId.current);
    setClassBtn("start");
  };

  useEffect(() => {
    if (userCount) {
      setCount(+userCount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timer", count);
  }, [count]);

  useEffect(() => {
    return () => clearInterval(counterId.current);
  }, []);

  return (
    <div className="timer">
      <h2>React timer</h2>
      <img
        onMouseEnter={(e) => (e.target.className = "drive")}
        className={isCounting ? "logo drive" : "logo"}
        src={logo}
        alt="Logo"
      />
      <div className="display">{count}</div>
      <div className="actions">
        {!isCounting ? (
          <button onClick={handleStart} className={classBtn}>
            Start
          </button>
        ) : (
          <button onClick={handleStop} className={classBtn}>
            Stop
          </button>
        )}
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
