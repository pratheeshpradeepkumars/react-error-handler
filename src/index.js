import React from "react";
import ReactDOM from "react-dom";

import ErrorHandler from "./ErrorHandler";
import ListComponent from "./ListComponent";

import "./styles.css";

function App() {
  return (
    <div>
      <h2>Crafts shopping list</h2>
      <ErrorHandler>
        <ListComponent />
      </ErrorHandler>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
