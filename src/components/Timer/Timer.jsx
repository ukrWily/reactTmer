import "./Timer.css";
import logo from "../../logo.svg";
import { useEffect, useReducer, useState } from "react";

const countReducer = (state, { type }) => {
  if (type === "START") {
    return {
      ...state,
      isCounting: true,
    };
  }
  if (type === "STOP") {
    return {
      ...state,
      isCounting: false,
    };
  }
  if (type === "RESET") {
    return {
      count: 0,
      isCounting: false,
    };
  }
  if (type === "TICK") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
};

function setDefaultValue() {
  const userCount = localStorage.getItem("timer");
  return userCount ? +userCount : 0;
}

const Timer = () => {
  const [{ count, isCounting }, dispatch] = useReducer(countReducer, {
    count: setDefaultValue(),
    isCounting: false,
  });
  const [classBtn, setClassBtn] = useState("start");

  useEffect(() => {
    localStorage.setItem("timer", count);
  }, [count]);

  useEffect(() => {
    let timerId = null;
    if (isCounting) {
      setClassBtn("stop");
      timerId = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => {
      timerId && clearInterval(timerId);
      timerId = null;
      setClassBtn("start");
    };
  }, [isCounting]);

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
          <button
            onClick={() => dispatch({ type: "START" })}
            className={classBtn}
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "STOP" })}
            className={classBtn}
          >
            Stop
          </button>
        )}
        <button onClick={() => dispatch({ type: "RESET" })} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

// const counterId = useRef(null);

// const handleStart = () => {
//   setIsCounting(true);
//   setClassBtn("stop");

//   counterId.current = setInterval(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, 1000);
// };

// const handleStop = () => {
//   setIsCounting(false);

//   clearInterval(counterId.current);
//   setClassBtn("start");
// };

// const handleReset = () => {
//   setIsCounting(false);
//   setCount(0);

//   clearInterval(counterId.current);
//   setClassBtn("start");
// };

// useEffect(() => {
//   if (userCount) {
//     setCount(+userCount);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem("timer", count);
// }, [count]);

// useEffect(() => {
//   return () => clearInterval(counterId.current);
// }, []);
