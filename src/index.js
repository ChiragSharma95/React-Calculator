import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./components/calculator.css";
import "font-awesome/css/font-awesome.css";
import Calculator from "./components/Calculator";

ReactDOM.render(<Calculator />, document.getElementById("root"));
registerServiceWorker();
