import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error(
    'Root element not found. Make sure your index.html contains <div id="root"></div>'
  );
}

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
