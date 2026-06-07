import React from "react";
import { useState } from "react";
import "./style.css";
const Toggle = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [color, setColor] = useState("#1b1b1b");
  const [buttoncolor, setButtoncolor] = useState("white");
  const toggle = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setColor(color === "white" ? "#1b1b1b" : "white");
    setButtoncolor(buttoncolor === "white" ? "#1b1b1b" : "white");
  };
  return (
    <div style={{ backgroundColor, color }}>
      <button
        onClick={toggle}
        style={{
          buttoncolor,
          color,
          border: `2px solid ${color}`,
        }}
      >
        {backgroundColor === "white" ? "Dark" : "Light"}
      </button>
      <section className="content">
        <h1>Welcome</h1><br />
        <h1>How are you?</h1>
      </section>
    </div>
  );
};

export default Toggle;
