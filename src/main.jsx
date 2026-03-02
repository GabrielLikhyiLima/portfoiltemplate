import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NICHES } from "./config/niches";

const url = new URL(window.location.href);
const niche = url.searchParams.get("niche") || "clinic";
const theme = (NICHES[niche] || NICHES.clinic).theme;

document.documentElement.setAttribute("data-theme", theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
