/*
  Entry point for the User Dashboard React application.

  ReactDOM: used to render the main App component into the root DOM node.
  App: main UserDashboard component that composes hooks and components to display the user dashboard.
  CSS import: imports global styles for the UserDashboard.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./UserDashboard";
import "./UserDashboard.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
