"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface CurrencySelectorProps {
  currency: string;
  onCurrencyChange: (currency: string) => void;
  className?: string;
}

export const SUPPORTED_CURRENCIES = ["USD", "EUR", "GBP", "JPY", "AUD"] as const;

export default function CurrencySelector({ currency, onCurrencyChange, className }: CurrencySelectorProps) {
  return (
    <div className={className}>
      <Label htmlFor="currency-select">Currency</Label>
      <Select value={currency} onValueChange={onCurrencyChange}>
<<<<<<< ej67rc-codex/redesign-ui-and-fix-bugs
        <SelectTrigger
          id="currency-select"
          className="w-full h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
        >
=======
        <SelectTrigger id="currency-select" className="h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
>>>>>>> main
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {SUPPORTED_CURRENCIES.map((cur) => (
            <SelectItem key={cur} value={cur} className="cursor-pointer">
              {cur}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
