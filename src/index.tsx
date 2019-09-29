import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import MyRouters from "./Router";
import "./Index.css";

ReactDOM.render(<MyRouters />, document.getElementById("root"));
serviceWorker.unregister();
