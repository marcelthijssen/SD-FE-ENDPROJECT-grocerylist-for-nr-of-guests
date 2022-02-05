import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import IsAuthContextProvider from "./context/IsAuthContextProvider";
import FavCounterContextProvider from "./context/FavContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FavCounterContextProvider>
      <IsAuthContextProvider>
          <App/>
      </IsAuthContextProvider>
    </FavCounterContextProvider>
  </Router>
  </React.StrictMode>,
  document.getElementById( "root" )
);