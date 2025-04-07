"use client";

import * as React from "react";
import { DollarSignIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function AmountInput({
  value,
  onChange,
  className,
}: AmountInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and decimal point
    const newValue = e.target.value.replace(/[^0-9.]/g, "");

    // Ensure only one decimal point
    const decimalCount = newValue.split(".").length - 1;
    if (decimalCount > 1) return;

    // Limit to 2 decimal places
    const parts = newValue.split(".");
    if (parts[1] && parts[1].length > 2) return;

    onChange(newValue);
  };

  const formatAsCurrency = () => {
    if (!value) return "";

    const numValue = parseFloat(value);
    if (isNaN(numValue)) return value;

    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(numValue);
  };

  return (
    <div
      className={cn("grid gap-2", className)}
      data-pol-id="j7e7td"
      data-pol-file-name="amount-input"
      data-pol-file-type="component"
    >
      <Label
        htmlFor="amount"
        className="text-slate-700 dark:text-slate-300"
        data-pol-id="99ubeu"
        data-pol-file-name="amount-input"
        data-pol-file-type="component"
      >
        Stay amount in $ (excl. tax)
      </Label>
      <div
        className="relative"
        data-pol-id="f6ny7b"
        data-pol-file-name="amount-input"
        data-pol-file-type="component"
      >
        <div
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50"
          data-pol-id="x0pk4d"
          data-pol-file-name="amount-input"
          data-pol-file-type="component"
        >
          <DollarSignIcon
            className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400"
            data-pol-id="s57raw"
            data-pol-file-name="amount-input"
            data-pol-file-type="component"
          />
        </div>
        <Input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          className="pl-12 h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-indigo-500/20 dark:focus:ring-indigo-500/20 transition-all duration-300"
          placeholder="0.00"
          data-pol-id="sa1hom"
          data-pol-file-name="amount-input"
          data-pol-file-type="component"
        />
      </div>
      {value && (
        <div
          className="text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center"
          data-pol-id="0jtns2"
          data-pol-file-name="amount-input"
          data-pol-file-type="component"
        >
          <span
            className="bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-md"
            data-pol-id="m29n9r"
            data-pol-file-name="amount-input"
            data-pol-file-type="component"
          >
            ${formatAsCurrency()}
          </span>
        </div>
      )}
    </div>
  );
}
