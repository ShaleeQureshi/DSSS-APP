import React from "react";
import ReactDOM from "react-dom";
import "./scripts/config/config";
import App from "./scripts/App";

// Importing Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/font.css";
import "./styles/text.scss";
import "./styles/spacing.css";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
