import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// todo: explain why this added
// import { Provider } from "react-redux";
// import store from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
