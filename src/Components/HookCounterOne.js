import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0); // Define state variable 'count' initialized to 0
  const [name, setName] = useState("");

  // Update document title when count changes
  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`; // Update the document title with the current count
  }, [count]); // useEffect runs when 'count' changes

  // Handle input change for 'name'
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {/* Input field for name */}
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      {/* Button to increment count */}
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounterOne;
