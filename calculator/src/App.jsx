import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div >
      <h1 >React Calculator</h1>

      <div>
        {input || "0"}
      </div>

      <div>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}          >
            {num}
          </button>
        ))}

        {["+", "/", "-", "*"].map((op) => (
          <button
            key={op}
            onClick={() => handleClick(op)}          >
            {op}
          </button>
        ))}

        <button
          onClick={handleClear}
        >
          C
        </button>

        <button
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
}

