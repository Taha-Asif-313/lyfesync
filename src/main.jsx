import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navabar from "./Components/Navabar.jsx";
import { TodoProvider } from "./Context/todoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <div className="w-full min-h-screen">
        <Navabar />
        <App />
      </div>
    </TodoProvider>
  </React.StrictMode>
);
