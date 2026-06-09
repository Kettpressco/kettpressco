import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import TshirtPrintingKettering from "./pages/TShirtPrintingKettering.jsx";
import WorkwearPrintingKettering from "./pages/WorkwearPrintingKettering.jsx";
import HoodiePrintingNorthampton from "./pages/HoodiePrintingNorthampton.jsx";
import GymWearPrintingNorthampton from "./pages/GymWearPrintingNorthampton.jsx";
import DtfPrintingNorthamptonshire from "./pages/dtfprintingnorthamptonshire.jsx";
import DtfPrintingNorthampton from "./pages/DtfPrintingNorthampton.jsx";
import TshirtPrintingNorthampton from "./pages/TshirtPrintingNorthampton.jsx";
import Tshirtprintingcorby from "./pages/Tshirtprintingcorby.jsx";
import TshirtprintingWellingborough from "./pages/TshirtprintingWellingborough.jsx";
import WorkwearPrintingWellingborough from "./pages/WorkwearPrintingWellingborough.jsx";
import WorkwearPrintingCorby from "./pages/WorkwearPrintingCorby.jsx";
import ChurchEventHoodies from "./pages/ChurchEventHoodies.jsx";
import ConstructionWorkwearKettering from "./pages/ConstructionWorkwearKettering.jsx";

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
  path="/workwear-printing-wellingborough"
  element={<WorkwearPrintingWellingborough />}
/>
<Route
  path="/t-shirt-printing-corby"
  element={<Tshirtprintingcorby />}
/>
<Route
  path="/workwear-printing-corby"
  element={<WorkwearPrintingCorby />}
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
  path="/gym-wear-printing-northampton"
  element={<GymWearPrintingNorthampton />}
/>
<Route
  path="/dtf-printing-northamptonshire"
  element={<DtfPrintingNorthamptonshire />}
/>
<Route
  path="/t-shirt-printing-northampton"
  element={<TshirtPrintingNorthampton />}
/>
<Route
  path="/church-event-hoodie-printing"
  element={<ChurchEventHoodies />}
/>
<Route
  path="/construction-workwear-kettering"
  element={<ConstructionWorkwearKettering />}
/>
</Routes>
      
    </BrowserRouter>
  </StrictMode>
);