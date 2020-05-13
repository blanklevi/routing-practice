import React from "react";
import "./App.css";

import { Router } from "@reach/router";
import Home from "./components/Home.js";
import Number from "./components/Number.js";
import Word from "./components/Word.js";
import FancyWord from "./components/HelloColor.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:id" />
        <Word path="/:word" />
        <FancyWord path="/:word/:textColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
