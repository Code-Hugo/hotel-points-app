"use client";

// import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

interface DatePickerProps {
  className?: string;
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  label: string;
  placeholder?: string;
  minDate?: Date;
  disabled?: boolean;
}

export default function DatePicker({
  className,
  date,
  onDateChange,
  label,
  placeholder = "Select date",
  minDate,
  disabled = false,
}: DatePickerProps) {
  return (
    <div
      className={cn("grid gap-2", className)}
      data-pol-id="fmv1g5"
      data-pol-file-name="date-picker"
      data-pol-file-type="component"
    >
      <Label
        htmlFor={`date-${label.toLowerCase().replace(/\s+/g, "-")}`}
        data-pol-id="u1a5ct"
        data-pol-file-name="date-picker"
        data-pol-file-type="component"
      >
        {label}
      </Label>
      <Popover
        data-pol-id="zviv40"
        data-pol-file-name="date-picker"
        data-pol-file-type="component"
      >
        <PopoverTrigger
          asChild
          data-pol-id="yf4rnc"
          data-pol-file-name="date-picker"
          data-pol-file-type="component"
        >
          <Button
            id={`date-${label.toLowerCase().replace(/\s+/g, "-")}`}
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200",
              !date && "text-muted-foreground",
              disabled && "opacity-50 cursor-not-allowed",
            )}
            disabled={disabled}
            data-pol-id="676w9y"
            data-pol-file-name="date-picker"
            data-pol-file-type="component"
          >
            <CalendarIcon
              className="mr-2 h-4 w-4"
              data-pol-id="2wxj52"
              data-pol-file-name="date-picker"
              data-pol-file-type="component"
            />
            {date ? (
              format(date, "LLL dd, y")
            ) : (
              <span
                data-pol-id="q0qlrc"
                data-pol-file-name="date-picker"
                data-pol-file-type="component"
              >
                {placeholder}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="start"
          data-pol-id="mcbr5a"
          data-pol-file-name="date-picker"
          data-pol-file-type="component"
        >
          <Calendar
            initialFocus
            mode="single"
            selected={date}
            onSelect={onDateChange}
            disabled={(date) => (minDate ? date < minDate : false)}
            className="rounded-md border"
            data-pol-id="a8eqef"
            data-pol-file-name="date-picker"
            data-pol-file-type="component"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
