import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import App from "./App";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import { CartProvider, useCart } from "./context/CartContext";

import ContactPage from "./pages/ContactPage";
import PrintingMethodsForCustomClothingKettering from "./pages/printingmethodsforcustomclothingkettering";
import AreasWeCover from "./pages/AreasWeCover.jsx";
import ThankYou from "./ThankYou";

import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

import QuoteCalculator from "./pages/QuoteCalculator";

import TshirtPrintingKettering from "./pages/TShirtPrintingKettering.jsx";
import TshirtPrintingKetteringPage from "./pages/TshirtPrintingKetteringPage";
import WorkwearPrintingKetteringPage from "./pages/WorkwearPrintingKetteringPage";

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
import ChurchEventHoodiePrinting from "./pages/ChurchEventHoodiePrinting";
import ConstructionWorkwearKettering from "./pages/ConstructionWorkwearKettering.jsx";
import CustomTShirtPrintingKettering from "./pages/CustomTshirtPrintingKettering.jsx";
import CustomTshirtPrintingNorthampton from "./pages/CustomTshirtPrintingNorthampton.jsx";

import TShirtPrintingCostGuide from "./pages/TShirtPrintingCostGuide";
import DTFvsVinylPrinting from "./pages/DTFvsVinylPrinting";
import BestWorkwearForTradespeople from "./pages/BestWorkwearForTradespeople";
import HowLongDoesDTFPrintingLast from "./pages/HowLongDoesDTFPrintingLast";
import CustomHoodiesForSchools from "./pages/CustomHoodiesForSchools";
import HiVisWorkwearPrintingKettering from "./pages/HiVisWorkwearPrintingKettering";
import BrandedWorkwearPrintingNorthamptonshire from "./pages/BrandedWorkwearPrintingNorthamptonshire";

import TShirtPrintingLeicester from "./pages/TShirtPrintingLeicester";
import WorkwearPrintingLeicester from "./pages/WorkwearPrintingLeicester";
import CustomHoodiePrintingLeicester from "./pages/CustomHoodiePrintingLeicester";
import TShirtPrintingRugby from "./pages/TShirtPrintingRugby";
import WorkwearPrintingRugby from "./pages/WorkwearPrintingRugby";

import TShirtPrintingUK from "./pages/TShirtPrintingUK";
import CustomTShirtsUK from "./pages/CustomTShirtsUK";
import PersonalisedTShirtsUK from "./pages/PersonalisedTShirtsUK";
import WorkwearPrintingUK from "./pages/WorkwearPrintingUK";

function Layout() {
  const { cartOpen, setCartOpen } = useCart();

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/quote-calculator" element={<QuoteCalculator />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        <Route
          path="/tshirt-printing-kettering"
          element={<TshirtPrintingKetteringPage />}
        />
        <Route
          path="/t-shirt-printing-kettering"
          element={<TshirtPrintingKettering />}
        />
        <Route
          path="/workwear-printing-kettering"
          element={<WorkwearPrintingKetteringPage />}
        />

        <Route path="/areas-we-cover" element={<AreasWeCover />} />
        <Route
          path="/dtf-printing-northampton"
          element={<DtfPrintingNorthampton />}
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
          path="/t-shirt-printing-wellingborough"
          element={<TshirtprintingWellingborough />}
        />
        <Route
          path="/t-shirt-printing-corby"
          element={<Tshirtprintingcorby />}
        />

        <Route
          path="/workwear-printing-wellingborough"
          element={<WorkwearPrintingWellingborough />}
        />
        <Route
          path="/workwear-printing-corby"
          element={<WorkwearPrintingCorby />}
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
          path="/church-event-hoodie-printing"
          element={<ChurchEventHoodiePrinting />}
        />
        <Route
          path="/church-event-hoodies"
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
          path="/tshirt-printing-rugby"
          element={<TShirtPrintingRugby />}
        />
        <Route
          path="/workwear-printing-rugby"
          element={<WorkwearPrintingRugby />}
        />

        <Route
          path="/t-shirt-printing-leicester"
          element={<TShirtPrintingLeicester />}
        />
        <Route
          path="/workwear-printing-leicester"
          element={<WorkwearPrintingLeicester />}
        />
        <Route
          path="/custom-hoodie-printing-leicester"
          element={<CustomHoodiePrintingLeicester />}
        />

        <Route
          path="/t-shirt-printing-cost-guide"
          element={<TShirtPrintingCostGuide />}
        />
        <Route path="/dtf-vs-vinyl-printing" element={<DTFvsVinylPrinting />} />
        <Route
          path="/best-workwear-for-tradespeople"
          element={<BestWorkwearForTradespeople />}
        />
        <Route
          path="/how-long-does-dtf-printing-last"
          element={<HowLongDoesDTFPrintingLast />}
        />
        <Route
          path="/custom-hoodies-for-schools"
          element={<CustomHoodiesForSchools />}
        />
        <Route
          path="/hi-vis-workwear-printing-kettering"
          element={<HiVisWorkwearPrintingKettering />}
        />
        <Route
          path="/branded-workwear-printing-northamptonshire"
          element={<BrandedWorkwearPrintingNorthamptonshire />}
        />

        <Route path="/t-shirt-printing-uk" element={<TShirtPrintingUK />} />
        <Route path="/custom-t-shirts-uk" element={<CustomTShirtsUK />} />
        <Route
          path="/personalised-t-shirts-uk"
          element={<PersonalisedTShirtsUK />}
        />
        <Route path="/workwear-printing-uk" element={<WorkwearPrintingUK />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CartProvider>
          <Layout />
        </CartProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);