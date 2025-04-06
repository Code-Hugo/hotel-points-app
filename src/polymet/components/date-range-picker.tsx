"use client";

import { format } from "date-fns";
import { enGB } from "date-fns/locale"; // ✅ Added for Monday-start week
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
  className?: string;
  dateRange: DateRange | undefined;
  onDateRangeChange: (range: DateRange | undefined) => void;
}

export default function DateRangePicker({
  className,
  dateRange,
  onDateRangeChange,
}: DateRangePickerProps) {
  return (
    <div
      className={cn("grid gap-2", className)}
      data-pol-id="xy0gnl"
      data-pol-file-name="date-range-picker"
      data-pol-file-type="component"
    >
      <Popover data-pol-id="bz1z8x" data-pol-file-name="date-range-picker" data-pol-file-type="component">
        <PopoverTrigger
          asChild
          data-pol-id="pbproy"
          data-pol-file-name="date-range-picker"
          data-pol-file-type="component"
        >
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
            data-pol-id="wamh1l"
            data-pol-file-name="date-range-picker"
            data-pol-file-type="component"
          >
            <CalendarIcon
              className="mr-2 h-4 w-4"
              data-pol-id="w53hwi"
              data-pol-file-name="date-range-picker"
              data-pol-file-type="component"
            />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span
                data-pol-id="z4bmho"
                data-pol-file-name="date-range-picker"
                data-pol-file-type="component"
              >
                Select check-in & check-out dates
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="start"
          data-pol-id="17yu33"
          data-pol-file-name="date-range-picker"
          data-pol-file-type="component"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={2}
            locale={enGB} // ✅ Make weeks start on Monday
            className="rounded-md border"
            data-pol-id="yw75mm"
            data-pol-file-name="date-range-picker"
            data-pol-file-type="component"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}