import { useState } from "react";
import { differenceInDays } from "date-fns";
import { LoyaltyProgram } from "@/polymet/data/loyalty-programs-data";

export function usePointsForm() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [selectedProgram, setSelectedProgram] = useState<LoyaltyProgram | undefined>();
  const [amount, setAmount] = useState("");
  const [points, setPoints] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currency, setCurrency] = useState("USD");

  const exchangeRates: Record<string, number> = {
    USD: 1,
    EUR: 1.1,
    GBP: 1.25,
    JPY: 0.009,
    AUD: 0.65,
  };

  const calculatePoints = () => {
    if (!selectedProgram || !amount || isNaN(parseFloat(amount))) {
      return 0;
    }

    const stayAmountUSD = parseFloat(amount) * (exchangeRates[currency] || 1);
    const basePoints = stayAmountUSD * selectedProgram.pointsPerDollar;

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

  const handleCheckInDateChange = (date: Date | undefined) => {
    setCheckInDate(date);

    // If check-out date is before the new check-in date, reset it
    if (date && checkOutDate && checkOutDate <= date) {
      setCheckOutDate(undefined);
    }
  };

  return {
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
  };
}
