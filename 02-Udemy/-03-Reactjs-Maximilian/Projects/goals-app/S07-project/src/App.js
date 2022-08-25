import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagrphHandler = useCallback(() => {
    setShowParagraph((prevShowParagarph) => !prevShowParagarph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagrphHandler}>Toggle Paragrph</Button>
    </div>
  );
}

export default App;
