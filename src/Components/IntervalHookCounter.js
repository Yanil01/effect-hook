import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  // Function to increment count
  const tick = () => {
    setCount(count + 1); // Increment count using setCount function
  };

  // useEffect hook to run side effects
  useEffect(() => {
    // Function to be executed after every render (including the first render)
    const interval = setInterval(tick, 1000); // Start interval to call tick function every second

    // Cleanup function to be run before the component is unmounted or rerendered
    return () => {
      clearInterval(interval); // Cleanup: Clear interval when component unmounts
    };
  });
  return <div>{count}</div>; // Render the current count
}

export default IntervalHookCounter;
