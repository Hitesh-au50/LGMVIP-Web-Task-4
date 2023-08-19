import React from "react";
import Calculator from "./Calculator";

const App = () => {
  return (
    // Center the content both horizontally and vertically
    <div className="flex justify-center items-center h-screen">
      {/* Render the Calculator component */}
      <Calculator />
    </div>
  );
};

export default App;
