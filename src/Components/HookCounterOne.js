import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0); // Define state variable 'count' initialized to 0
  useEffect(() => {
    document.title = `You clicked ${count} times`; // Update the document title with the current count
  }); // useEffect runs after every render because it has no dependencies listed

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>{" "}
      {/* Button to increment count */}
    </div>
  );
}

export default HookCounterOne;
