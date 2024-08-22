import React from "react";
import Inputs from "./components/Inputs";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-800 p-1">
        <div className="one min-h-fit mb-2">
          <Inputs />
        </div>
      </div>
    </>
  );
};

export default App;
