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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">React Calculator</h1>

      <div className="bg-gray-200 text-right text-xl font-mono p-3 mb-4 rounded-lg h-12 w-64 overflow-x-auto">
        {input || "0"}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            className="bg-gray-300 hover:bg-gray-400 p-3 rounded-lg text-lg font-semibold"
          >
            {num}
          </button>
        ))}

        {["+", "/", "-", "*"].map((op) => (
          <button
            key={op}
            onClick={() => handleClick(op)}
            className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg text-lg font-bold"
          >
            {op}
          </button>
        ))}

        <button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg text-lg font-bold col-span-2"
        >
          C
        </button>

        <button
          onClick={handleCalculate}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg text-lg font-bold col-span-2"
        >
          =
        </button>
      </div>
    </div>
  );
}
