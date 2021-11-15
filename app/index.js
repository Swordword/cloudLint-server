import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./demo.less";

ReactDOM.render(
    React.createElement(App),
    document.getElementById("app")
);
