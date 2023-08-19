import React, { useState } from "react";

const Calculator = () => {
  // State to store the calculation result
  const [result, setResult] = useState("");

  // Function to handle number and operator button clicks
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  // Function to clear the result
  const handleClear = () => {
    setResult("");
  };

  // Function to delete the last character from the result
  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  // Function to handle calculation when "=" button is clicked
  const handleCalculate = () => {
    try {
      // Using JavaScript's eval function to calculate the result
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to calculate percentage
  const handlePercentage = () => {
    try {
      const parsedResult = eval(result);
      const percentage = (parsedResult / 100).toString();
      setResult(percentage);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col w-80 mx-auto my-8 bg-gray-950 p-4">
      {/* Display the current result */}
      <input
        type="text"
        className="w-full p-2 mb-4 text-right border border-gray-300 rounded"
        value={result}
        readOnly
      />
      {/* Grid of buttons for numbers, operators, and actions */}
      <div className="grid grid-cols-4 gap-2">
        {/* Number and operator buttons */}
        <button
          name="7"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          7
        </button>
        <button
          name="8"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          8
        </button>
        <button
          name="9"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          9
        </button>
        <button
          name="/"
          onClick={handleClick}
          className="p-2 bg-orange-500 text-white rounded"
        >
          ÷
        </button>
        <button
          name="4"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          4
        </button>
        <button
          name="5"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          5
        </button>
        <button
          name="6"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          6
        </button>
        <button
          name="*"
          onClick={handleClick}
          className="p-2 bg-orange-500 text-white rounded"
        >
          ×
        </button>
        <button
          name="1"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          1
        </button>
        <button
          name="2"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          2
        </button>
        <button
          name="3"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          3
        </button>
        <button
          name="-"
          onClick={handleClick}
          className="p-2 bg-orange-500 text-white rounded"
        >
          -
        </button>
        <button
          name="."
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          .
        </button>
        <button
          name="0"
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded"
        >
          0
        </button>
        <button
          name="="
          onClick={handleCalculate}
          className="col-span-2 p-2 bg-orange-500 text-white rounded"
        >
          =
        </button>
        <button
          name="+"
          onClick={handleClick}
          className="p-2 bg-orange-500 text-white rounded"
        >
          +
        </button>
        {/* Clear button */}
        <button
          name="clear"
          onClick={handleClear}
          className="p-2 bg-red-500 text-white rounded"
        >
          C
        </button>
        {/* Delete button */}
        <button
          name="delete"
          onClick={handleDelete}
          className="p-2 bg-orange-500 text-white rounded"
        >
          Delete
        </button>
        {/* Percentage button */}
        <button
          name="%"
          onClick={handlePercentage}
          className="p-2 bg-orange-500 text-white rounded"
        >
          %
        </button>
      </div>
    </div>
  );
};

export default Calculator;
