import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "./styles/main.module.scss";
import { DialogContextProvider } from "./context/DialogContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <DialogContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DialogContextProvider>
  </AuthContextProvider>
);
