import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
