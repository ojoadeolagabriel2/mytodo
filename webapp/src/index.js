import React from "react";
import { render } from "react-dom";
import App from "./containers/app";

render(
  <App proposition={{ label: "adeola" }} />,
  document.getElementById("root")
);
