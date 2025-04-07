import { Metadata } from "next";
import { HotelIcon } from "lucide-react";

import PointsCalculator from "@/polymet/components/points-calculator";

export const metadata: Metadata = {
  title: "Hotel Points Calculator",
  description: "Calculate loyalty points for your hotel stays",
};

export default function HotelPointsCalculatorPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
      data-pol-id="wio3bw"
      data-pol-file-name="hotel-points-calculator"
      data-pol-file-type="page"
    >
      <div
        className="container max-w-6xl mx-auto px-4 py-12"
        data-pol-id="bbqphj"
        data-pol-file-name="hotel-points-calculator"
        data-pol-file-type="page"
      >
        <div
          className="flex flex-col items-center mb-10 text-center"
          data-pol-id="f9h25i"
          data-pol-file-name="hotel-points-calculator"
          data-pol-file-type="page"
        >
          <div
            className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4"
            data-pol-id="ii12i5"
            data-pol-file-name="hotel-points-calculator"
            data-pol-file-type="page"
          >
            <HotelIcon
              className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
              data-pol-id="euq3j0"
              data-pol-file-name="hotel-points-calculator"
              data-pol-file-type="page"
            />
          </div>
          <h1
            className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-3"
            data-pol-id="vc1zy9"
            data-pol-file-name="hotel-points-calculator"
            data-pol-file-type="page"
          >
            Hotel Loyalty Points Calculator
          </h1>
          <p
            className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg"
            data-pol-id="ow9zio"
            data-pol-file-name="hotel-points-calculator"
            data-pol-file-type="page"
          >
            Estimate loyalty points for your next stay with global hotel chains.
          </p>
        </div>

        <div
          className="flex justify-center"
          data-pol-id="4gwzrf"
          data-pol-file-name="hotel-points-calculator"
          data-pol-file-type="page"
        >
          <PointsCalculator
            data-pol-id="3rzi6s"
            data-pol-file-name="hotel-points-calculator"
            data-pol-file-type="page"
          />
        </div>
      </div>
    </div>
  );
}