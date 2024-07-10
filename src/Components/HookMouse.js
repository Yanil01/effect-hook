import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      logMousePosition(e);
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      Hook X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
