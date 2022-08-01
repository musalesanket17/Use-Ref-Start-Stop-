import React, { useEffect, useRef, useState } from "react";

export default function Uesref() {
  const [count, setCount] = useState(0);
  const useTimerRef = useRef();
  const [running, setRunning] = useState(false);

  useEffect(() => {
    handlestart();

    return handleStop;
  }, []);

  const handleStop = () => {
    clearInterval(useTimerRef.current);
    setRunning(false);
  };

  const handlestart = () => {
    if (running) {
      return;
    }
    useTimerRef.current = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
    setRunning(true);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlestart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
