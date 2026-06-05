import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import TshirtPrintingKettering from "./pages/TShirtPrintingKettering.jsx";
import WorkwearPrintingKettering from "./pages/WorkwearPrintingKettering.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/t-shirt-printing-kettering"
          element={<TshirtPrintingKettering />}
        />

        <Route
          path="/workwear-printing-kettering"
          element={<WorkwearPrintingKettering />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);