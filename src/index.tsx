import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/App.css";

const container = document.getElementById("root");
const root = createRoot(container!); // Tạo root từ container

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/JGas2">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
