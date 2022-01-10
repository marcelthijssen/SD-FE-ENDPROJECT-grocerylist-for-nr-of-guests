import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import styles from "./index.module.scss";
// import styles from "./grid.module.css";
import App from "./App";
//components
import IsAuthContextProvider from "./context/IsAuthContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <IsAuthContextProvider>
          <App/>
      </IsAuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById( "root" )
);