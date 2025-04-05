import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelPointsCalculatorPage from "@/polymet/pages/hotel-points-calculator";

export default function HotelPointsCalculatorPrototype() {
  return (
    <Router
      data-pol-id="zkrpql"
      data-pol-file-name="hotel-points-calculator-prototype"
      data-pol-file-type="prototype"
    >
      <Routes
        data-pol-id="i4wk22"
        data-pol-file-name="hotel-points-calculator-prototype"
        data-pol-file-type="prototype"
      >
        <Route
          path="/"
          element={
            <HotelPointsCalculatorPage
              data-pol-id="d1f2kq"
              data-pol-file-name="hotel-points-calculator-prototype"
              data-pol-file-type="prototype"
            />
          }
          data-pol-id="suffn0"
          data-pol-file-name="hotel-points-calculator-prototype"
          data-pol-file-type="prototype"
        />
        <Route
          path="/hotel-points-calculator"
          element={
            <HotelPointsCalculatorPage
              data-pol-id="tyi7k6"
              data-pol-file-name="hotel-points-calculator-prototype"
              data-pol-file-type="prototype"
            />
          }
          data-pol-id="wxihsn"
          data-pol-file-name="hotel-points-calculator-prototype"
          data-pol-file-type="prototype"
        />
      </Routes>
    </Router>
  );
}
