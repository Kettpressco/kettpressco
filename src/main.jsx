import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import TshirtPrintingKettering from "./pages/TShirtPrintingKettering.jsx";
import WorkwearPrintingKettering from "./pages/WorkwearPrintingKettering.jsx";
import HoodiePrintingNorthampton from "./pages/HoodiePrintingNorthampton.jsx";
import DtfPrintingNorthamptonshire from "./pages/dtfprintingnorthamptonshire.jsx";
import DtfPrintingNorthampton from "./pages/DtfPrintingNorthampton.jsx";
import TshirtPrintingNorthampton from "./pages/TshirtPrintingNorthampton.jsx";
import Tshirtprintingcorby from "./pages/Tshirtprintingcorby.jsx";
import TshirtprintingWellingborough from "./pages/TshirtprintingWellingborough.jsx";

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
  path="/dtf-printing-northampton"
  element={<DtfPrintingNorthampton />}
/>
<Route
  path="/t-shirt-printing-wellingborough"
  element={<TshirtprintingWellingborough />}
/>
<Route
  path="/t-shirt-printing-corby"
  element={<Tshirtprintingcorby />}
/>
        <Route
          path="/workwear-printing-kettering"
          element={<WorkwearPrintingKettering />}
        />
      <Route
  path="/hoodie-printing-northampton"
  element={<HoodiePrintingNorthampton />}
/>
<Route
  path="/dtf-printing-northamptonshire"
  element={<DtfPrintingNorthamptonshire />}
/>
<Route
  path="/t-shirt-printing-northampton"
  element={<TshirtPrintingNorthampton />}
/>
</Routes>
      
    </BrowserRouter>
  </StrictMode>
);