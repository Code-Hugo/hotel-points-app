import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Calculator from "./pages/Calculator"; // Removed unused import
import Contact from "./pages/Contact";
import HotelPointsCalculatorPage from "@/polymet/pages/hotel-points-calculator";
import { Analytics } from "@vercel/analytics/react";
import { inject } from "@vercel/analytics";
import Privacy from "./pages/Privacy";

// Call inject function to initialize analytics
inject();

export default function HotelPointsCalculatorPrototype() {
  return (
    <Router
      data-pol-id="zkrpql"
      data-pol-file-name="hotel-points-calculator-prototype"
      data-pol-file-type="prototype"
    >
      <Navbar />
      <Routes
        data-pol-id="i4wk22"
        data-pol-file-name="hotel-points-calculator-prototype"
        data-pol-file-type="prototype"
      >
        <Route
          path="/"
          element={
            <>
              <HotelPointsCalculatorPage
                data-pol-id="d1f2kq"
                data-pol-file-name="hotel-points-calculator-prototype"
                data-pol-file-type="prototype"
              />
              <Analytics />
            </>
          }
          data-pol-id="suffn0"
          data-pol-file-name="hotel-points-calculator-prototype"
          data-pol-file-type="prototype"
        />
        <Route
          path="/hotel-points-calculator"
          element={
            <>
              <HotelPointsCalculatorPage
                data-pol-id="tyi7k6"
                data-pol-file-name="hotel-points-calculator-prototype"
                data-pol-file-type="prototype"
              />
              <Analytics />
            </>
          }
          data-pol-id="wxihsn"
          data-pol-file-name="hotel-points-calculator-prototype"
          data-pol-file-type="prototype"
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}
