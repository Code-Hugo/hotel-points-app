"use client";

import { CalculatorIcon, InfoIcon, SparklesIcon } from "lucide-react";
import DateRangePicker from "@/polymet/components/date-range-picker";
import LoyaltyProgramSelector from "@/polymet/components/loyalty-program-selector";
import AmountInput from "@/polymet/components/amount-input";
import CurrencySelector from "@/polymet/components/currency-selector";
import PointsResultDisplay from "@/polymet/components/points-result-display";
import { usePointsForm } from "@/hooks/usePointsForm";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PointsCalculatorProps {
  className?: string;
}

export default function PointsCalculator({ className }: PointsCalculatorProps) {
  const {
    checkInDate,
    checkOutDate,
    selectedProgram,
    amount,
    points,
    isCalculating,
    handleCheckInDateChange,
    setCheckOutDate,
    setSelectedProgram,
    setAmount,
    currency,
    setCurrency,
    exchangeRates,
    handleCalculate,
    isFormValid,
    getNumberOfNights,
  } = usePointsForm();

  return (
    <Card
      className={cn(
        "w-full md:max-w-xl sm:rounded-xl p-4 overflow-hidden border-0 shadow-lg",
        selectedProgram
          ? "shadow-[0_0_30px_rgba(0,0,0,0.1)]"
          : "shadow-[0_4px_24px_rgba(0,0,0,0.05)]",
        className,
      )}
      style={{
        background: selectedProgram
          ? `linear-gradient(to bottom right, ${selectedProgram.brandColor}10, white, ${selectedProgram.secondaryColor || selectedProgram.brandColor}10)`
          : "linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), white, rgba(168, 85, 247, 0.05))",
      }}
      data-pol-id="ldl553"
      data-pol-file-name="points-calculator"
      data-pol-file-type="component"
    >
      <CardHeader
        className={cn(
          "pb-4 border-b bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
          selectedProgram &&
            `bg-gradient-to-r from-[${selectedProgram.brandColor}] to-[${selectedProgram.secondaryColor || selectedProgram.brandColor}]`,
        )}
        style={{
          background: selectedProgram
            ? `linear-gradient(to right, ${selectedProgram.brandColor}, ${selectedProgram.secondaryColor || selectedProgram.brandColor})`
            : "linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247))",
        }}
        data-pol-id="jqout3"
        data-pol-file-name="points-calculator"
        data-pol-file-type="component"
      >
        <CardTitle
          className="flex items-center text-xl font-semibold tracking-wide justify-center"
          data-pol-id="nu2nf2"
          data-pol-file-name="points-calculator"
          data-pol-file-type="component"
        >
          <div
            className="bg-white/20 p-1.5 rounded-full mr-2"
            data-pol-id="5q5hck"
            data-pol-file-name="points-calculator"
            data-pol-file-type="component"
          >
            <CalculatorIcon
              className="h-5 w-5"
              data-pol-id="1myqp5"
              data-pol-file-name="points-calculator"
              data-pol-file-type="component"
            />
          </div>
          Calculator
        </CardTitle>
        <CardDescription
          className="text-white/80"
          data-pol-id="q379z9"
          data-pol-file-name="points-calculator"
          data-pol-file-type="component"
        >
          Please provide the following details to estimate your points
        </CardDescription>
      </CardHeader>
      <CardContent
        className="space-y-5 pt-6"
        data-pol-id="vl051z"
        data-pol-file-name="points-calculator"
        data-pol-file-type="component"
      >
        <div
          className="space-y-5"
          data-pol-id="i7ri48"
          data-pol-file-name="points-calculator"
          data-pol-file-type="component"
        >
<<<<<<< ej67rc-codex/redesign-ui-and-fix-bugs
          <div
            className="grid gap-4 sm:grid-cols-2 items-end"
            data-pol-id="votj2i"
            data-pol-file-name="points-calculator"
            data-pol-file-type="component"
          >
            <DateRangePicker
              label="Stay dates"
=======
          <div className="grid gap-4 sm:grid-cols-2" data-pol-id="votj2i" data-pol-file-name="points-calculator" data-pol-file-type="component">
            <DateRangePicker
>>>>>>> main
              dateRange={{ from: checkInDate, to: checkOutDate }}
              onDateRangeChange={(range) => {
                handleCheckInDateChange(range?.from);
                setCheckOutDate(range?.to);
              }}
<<<<<<< ej67rc-codex/redesign-ui-and-fix-bugs
            />
            <CurrencySelector
              currency={currency}
              onCurrencyChange={setCurrency}
              className="w-full"
=======
>>>>>>> main
            />
            <CurrencySelector currency={currency} onCurrencyChange={setCurrency} />
          </div>

          {checkInDate && checkOutDate && checkOutDate > checkInDate && (
            <div
              className="text-sm font-medium bg-indigo-100 dark:bg-indigo-800/40 border border-indigo-200 dark:border-indigo-700 px-4 py-1.5 rounded-full inline-block text-indigo-800 dark:text-indigo-300"
              data-pol-id="x7u8xz"
              data-pol-file-name="points-calculator"
              data-pol-file-type="component"
            >
              <span
                className="font-medium"
                data-pol-id="2j35x2"
                data-pol-file-name="points-calculator"
                data-pol-file-type="component"
              >
                {getNumberOfNights()}
              </span>{" "}
              night
              {getNumberOfNights() !== 1 ? "s" : ""}
            </div>
          )}

          <LoyaltyProgramSelector
            selectedProgram={selectedProgram}
            onProgramChange={setSelectedProgram}
            data-pol-id="nz8ywj"
            data-pol-file-name="points-calculator"
            data-pol-file-type="component"
          />

          <AmountInput
            value={amount}
            onChange={setAmount}
            currency={currency}
            data-pol-id="fseily"
            data-pol-file-name="points-calculator"
            data-pol-file-type="component"
          />

          {selectedProgram && (
            <div
              className="flex items-center text-sm bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-100 dark:border-slate-700"
              data-pol-id="ogjg7c"
              data-pol-file-name="points-calculator"
              data-pol-file-type="component"
            >
              <SparklesIcon
                className="h-4 w-4 mr-2"
                style={{ color: selectedProgram.brandColor }}
                data-pol-id="42hu35"
                data-pol-file-name="points-calculator"
                data-pol-file-type="component"
              />

              <span
                className="font-medium"
                style={{ color: selectedProgram.brandColor }}
                data-pol-id="472nyp"
                data-pol-file-name="points-calculator"
                data-pol-file-type="component"
              >
                Base earn rate: {selectedProgram.pointsPerDollar} points per
                dollar
              </span>
              <TooltipProvider
                data-pol-id="jwa9q2"
                data-pol-file-name="points-calculator"
                data-pol-file-type="component"
              >
                <Tooltip
                  data-pol-id="4za2zz"
                  data-pol-file-name="points-calculator"
                  data-pol-file-type="component"
                >
                  <TooltipTrigger
                    asChild
                    data-pol-id="ou2wbr"
                    data-pol-file-name="points-calculator"
                    data-pol-file-type="component"
                  >
                    <InfoIcon
                      className="ml-1 h-4 w-4 cursor-help text-slate-400"
                      data-pol-id="axnzt2"
                      data-pol-file-name="points-calculator"
                      data-pol-file-type="component"
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    data-pol-id="pc26n4"
                    data-pol-file-name="points-calculator"
                    data-pol-file-type="component"
                  >
                    <p
                      data-pol-id="g823n5"
                      data-pol-file-name="points-calculator"
                      data-pol-file-type="component"
                    >
                      Base points before any elite status bonuses
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>

        <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-4 border border-indigo-100 dark:border-slate-700">
          <PointsResultDisplay
            points={points}
            program={selectedProgram}
            isCalculating={isCalculating}
            className="mt-6"
            data-pol-id="serb7e"
            data-pol-file-name="points-calculator"
            data-pol-file-type="component"
          />
        </div>

        {selectedProgram && parseFloat(amount) > 0 && points > 0 && (
          <div className="border rounded-xl bg-slate-50 dark:bg-slate-800/40 p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Cash Price</div>
              <div className="text-lg font-semibold">
                {currency === "USD" ? "$" : currency === "EUR" ? "€" : currency === "GBP" ? "£" : currency === "JPY" ? "¥" : "A$"}
                {amount}
              </div>
            </div>

            <div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Points Required</div>
              <div className="text-lg font-semibold">{points} pts</div>
            </div>

            <div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Value per Point</div>
              <div
                className={`text-lg font-bold ${
                  (parseFloat(amount) * (exchangeRates[currency] || 1) / points) > 0.015 ? 'text-emerald-600' : 'text-amber-500'
                }`}
              >
                {(
                  (parseFloat(amount) * (exchangeRates[currency] || 1)) /
                  points
                ).toFixed(2)}
                ¢/pt
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter
        className="bg-slate-50/80 dark:bg-slate-800/20 border-t p-4"
        data-pol-id="46279z"
        data-pol-file-name="points-calculator"
        data-pol-file-type="component"
      >
        <Button
          onClick={handleCalculate}
          className={cn(
            "w-full text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-100 focus:ring-2 focus:ring-indigo-400",
            !isFormValid() ? "opacity-70" : "opacity-100",
            "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700",
          )}
          style={
            selectedProgram
              ? {
                  background: `linear-gradient(to right, ${selectedProgram.brandColor}, ${selectedProgram.secondaryColor || selectedProgram.brandColor})`,
                }
              : {}
          }
          disabled={!isFormValid()}
          data-pol-id="6t9vi7"
          data-pol-file-name="points-calculator"
          data-pol-file-type="component"
        >
          Calculate Points
        </Button>
      </CardFooter>
      <details className="text-xs mt-4 text-slate-500 dark:text-slate-400">
        <summary className="cursor-pointer underline">Disclaimer</summary>
        <p className="mt-2">
          StaysPoints is an independent project created for informational and illustrative purposes only. This website is not affiliated with, endorsed by, or sponsored by any hotel brand displayed herein. All trademarks, brand names, and logos are the property of their respective owners.
          <br /><br />
          The points estimates shown are amateur calculations based on publicly available data and are intended for illustrative purposes only. They should not be considered accurate representations of actual loyalty program earnings. Always refer to the official websites of each hotel brand for up-to-date and accurate rewards information.
        </p>
      </details>
    </Card>
  );
}
