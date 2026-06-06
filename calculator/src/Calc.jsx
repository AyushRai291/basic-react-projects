import React, { useState } from "react";
import "./style.css";

const Calc = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [op, setOp] = useState("+");
  const [output, setOutput] = useState("0");

  function calculate() {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "" || Number.isNaN(a) || Number.isNaN(b)) {
      setOutput("Enter valid numbers");
      return;
    }

    let result;

    switch (op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b === 0) {
          setOutput("Cannot divide by 0");
          return;
        }
        result = a / b;
        break;
      case "%":
        if (b === 0) {
          setOutput("Cannot mod by 0");
          return;
        }
        result = a % b;
        break;
      default:
        setOutput("Choose operation");
        return;
    }

    setOutput(String(result));
  }

  function resetAll() {
    setNum1("");
    setNum2("");
    setOp("+");
    setOutput("0");
  }

  const operations = ["+", "-", "*", "/", "%"];

  return (
    <div className="app">
      <div className="calculator">
        <div className="brand">
          <span className="dot" />
          <span>NEON CALC</span>
        </div>

        <div className="display">
          <div className="display-label">RESULT</div>
          <div className="display-value">{output}</div>
        </div>

        <div className="input-grid">
          <div className="field">
            <label>Number 1</label>
            <input
              type="number"
              placeholder="Enter Num1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Number 2</label>
            <input
              type="number"
              placeholder="Enter Num2"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
        </div>

        <div className="op-row">
          {operations.map((item) => (
            <button
              key={item}
              className={`op-btn ${op === item ? "active" : ""}`}
              onClick={() => setOp(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="action-row">
          <button className="btn ghost" onClick={resetAll} type="button">
            Reset
          </button>
          <button className="btn primary" onClick={calculate} type="button">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;