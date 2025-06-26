"use client";

import * as React from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
  className?: string;
  dateRange: DateRange | undefined;
  onDateRangeChange: (range: DateRange | undefined) => void;
  label?: string;
  minDate?: Date;
}

export default function DateRangePicker({
  className,
  dateRange,
  onDateRangeChange,
  label = "Stay dates",
  minDate,
}: DateRangePickerProps) {
  const today = new Date();
  const minSelectable = minDate ?? today;
  const [open, setOpen] = React.useState(false);
  return (
    <div className={cn("grid gap-2", className)}>
      {label && (
        <Label htmlFor="date-range-picker" className="text-sm font-medium">
          {label}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date-range-picker"
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200",
              !dateRange?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} –{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Select check-in & check-out dates</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            numberOfMonths={2}
            selected={dateRange}
            onSelect={(range) => {
              onDateRangeChange(range);
              if (range?.from && range.to) {
                setOpen(false);
              }
            }}
            defaultMonth={dateRange?.from}
            locale={enGB}
            disabled={(date) => date < minSelectable}
            showOutsideDays
            weekStartsOn={1}
            className="rounded-md border"
            classNames={{
              day_outside: "text-slate-300 opacity-50",
              day: "h-9 w-9 text-center",
              day_disabled: "text-muted-foreground opacity-40 cursor-not-allowed",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}