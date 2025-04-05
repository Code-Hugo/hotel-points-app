"use client";

import * as React from "react";
import { differenceInDays } from "date-fns";
import { CalculatorIcon, InfoIcon, SparklesIcon } from "lucide-react";

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
import { LoyaltyProgram } from "@/polymet/data/loyalty-programs-data";
import DatePicker from "@/polymet/components/date-picker";
import LoyaltyProgramSelector from "@/polymet/components/loyalty-program-selector";
import AmountInput from "@/polymet/components/amount-input";
import PointsResultDisplay from "@/polymet/components/points-result-display";

interface PointsCalculatorProps {
  className?: string;
}

export default function PointsCalculator({ className }: PointsCalculatorProps) {
  const [checkInDate, setCheckInDate] = React.useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = React.useState<Date | undefined>();
  const [selectedProgram, setSelectedProgram] = React.useState<
    LoyaltyProgram | undefined
  >();
  const [amount, setAmount] = React.useState("");
  const [points, setPoints] = React.useState(0);
  const [isCalculating, setIsCalculating] = React.useState(false);

  const calculatePoints = () => {
    if (!selectedProgram || !amount || isNaN(parseFloat(amount))) {
      return 0;
    }

    const stayAmount = parseFloat(amount);
    const basePoints = stayAmount * selectedProgram.pointsPerDollar;

    // Apply any multipliers (simplified for this example)
    const multiplier = selectedProgram.bonusMultiplier?.eliteStatus || 1;

    return basePoints * multiplier;
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      setPoints(calculatePoints());
      setIsCalculating(false);
    }, 800);
  };

  const getNumberOfNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    return differenceInDays(checkOutDate, checkInDate);
  };

  const isFormValid = () => {
    return (
      selectedProgram &&
      amount &&
      parseFloat(amount) > 0 &&
      checkInDate &&
      checkOutDate &&
      checkOutDate > checkInDate
    );
  };

  // Handle check-in date change
  const handleCheckInDateChange = (date: Date | undefined) => {
    setCheckInDate(date);

    // If check-out date is before the new check-in date, reset it
    if (date && checkOutDate && checkOutDate <= date) {
      setCheckOutDate(undefined);
    }
  };

  return (
    <Card
      className={cn(
        "w-full max-w-md overflow-hidden border-0 shadow-lg",
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
          "pb-2 border-b bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
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
          className="flex items-center text-white"
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
          Hotel Points Calculator
        </CardTitle>
        <CardDescription
          className="text-white/80"
          data-pol-id="q379z9"
          data-pol-file-name="points-calculator"
          data-pol-file-type="component"
        >
          Estimate loyalty points for your hotel stay
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
          <div
            className="grid grid-cols-2 gap-4"
            data-pol-id="votj2i"
            data-pol-file-name="points-calculator"
            data-pol-file-type="component"
          >
            <DatePicker
              label="Check-in Date"
              date={checkInDate}
              onDateChange={handleCheckInDateChange}
              placeholder="Select check-in"
              data-pol-id="1rqm1y"
              data-pol-file-name="points-calculator"
              data-pol-file-type="component"
            />

            <DatePicker
              label="Check-out Date"
              date={checkOutDate}
              onDateChange={setCheckOutDate}
              placeholder="Select check-out"
              minDate={
                checkInDate
                  ? new Date(checkInDate.getTime() + 86400000)
                  : undefined
              }
              disabled={!checkInDate}
              data-pol-id="4jfi92"
              data-pol-file-name="points-calculator"
              data-pol-file-type="component"
            />
          </div>

          {checkInDate && checkOutDate && checkOutDate > checkInDate && (
            <div
              className="text-sm px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 inline-block"
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

        <PointsResultDisplay
          points={points}
          program={selectedProgram}
          isCalculating={isCalculating}
          className="mt-6"
          data-pol-id="serb7e"
          data-pol-file-name="points-calculator"
          data-pol-file-type="component"
        />
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
            "w-full text-white font-medium transition-all duration-300",
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
    </Card>
  );
}
