import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/global.css";
import App from "./App.jsx";

import "@fontsource/barlow/400.css"; // Barlow Regular
import "@fontsource/barlow/700.css"; // Barlow Bold
import "@fontsource/barlow-condensed/400.css"; // Barlow Condensed Regular
import "@fontsource/barlow-condensed/700.css"; // Barlow Condensed Bold
import "@fontsource/bellefair/400.css"; // Bellefair Regular

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
