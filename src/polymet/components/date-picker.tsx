"use client";

//import * as React from "react";
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
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={`date-${label.toLowerCase().replace(/\s+/g, "-")}`}>
        {label}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={`date-${label.toLowerCase().replace(/\s+/g, "-")}`}
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200",
              !date && "text-muted-foreground",
              disabled && "opacity-50 cursor-not-allowed",
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              format(date, "LLL dd, y")
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            selected={date}
            onSelect={onDateChange}
            disabled={(date) => (minDate ? date < minDate : false)}
            className="rounded-md border"
            showOutsideDays={true}
            weekStartsOn={1}
            classNames={{
              day_outside: "text-slate-300 opacity-50",
              day: "h-9 w-9 text-center"
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}