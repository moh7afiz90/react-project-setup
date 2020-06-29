import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>This is a testing component</h2>
    </div>
  );
};
render(<App></App>, document.getElementById("root"));
