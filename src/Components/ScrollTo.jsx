import { useState } from "react";

function ScrollTo({ targetId, children }) {



  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button 
      onClick={() => {
        scrollToTarget()
      }}
    >
      {children}
    </button>
  );
}

export default ScrollTo;
