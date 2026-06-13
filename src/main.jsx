import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App.jsx";

import PrintingMethodsForCustomClothingKettering from "./pages/printingmethodsforcustomclothingkettering";
import AreasWeCover from "./pages/AreasWeCover.jsx";
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
import CustomTShirtPrintingKettering from "./pages/CustomTshirtPrintingKettering.jsx";
import CustomTshirtPrintingNorthampton from "./pages/CustomTshirtPrintingNorthampton.jsx";
import TShirtPrintingCostGuide from "./pages/TShirtPrintingCostGuide";
import DTFvsVinylPrinting from "./pages/DTFvsVinylPrinting";
import TshirtPrintingKetteringPage from "./pages/TshirtPrintingKetteringPage";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

<Route
  path="/tshirt-printing-kettering"
  element={<TshirtPrintingKetteringPage />}
/>
         <Route
          path="/custom-t-shirt-printing-northampton"
          element={<CustomTshirtPrintingNorthampton />}
        />
        
        <Route
          path="/t-shirt-printing-kettering"
          element={<TshirtPrintingKettering />}
        />

    <Route
  path="/areas-we-cover"
  element={<AreasWeCover />}
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
<Route
  path="/custom-t-shirt-printing-kettering"
  element={<CustomTShirtPrintingKettering />}
/>
<Route
  path="/custom-t-shirt-printing-northampton"
  element={<CustomTshirtPrintingNorthampton />}
/>
<Route
  path="/printing-methods-for-custom-clothing-kettering"
  element={<PrintingMethodsForCustomClothingKettering />}
/>

<Route
  path="/t-shirt-printing-cost-guide"
  element={<TShirtPrintingCostGuide />}
/>
<Route
  path="/dtf-vs-vinyl-printing"
  element={<DTFvsVinylPrinting />}
/>
      </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);