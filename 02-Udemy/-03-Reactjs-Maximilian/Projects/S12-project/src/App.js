import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

  // const toggleParagrphHandler = useCallback(() => {
  //   setShowParagraph((prevShowParagarph) => !prevShowParagarph);
  // }, []);

  const changeTitleHandler = useCallback(() => {
    setListTitle("new title");
  }, []);

  const listItems = useMemo(() => [4, 2, 1, 10, 8], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change list title</Button>
    </div>
  );
}

export default App;
