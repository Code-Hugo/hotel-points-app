"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, useNavigation } from "react-day-picker"
import { enGB } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function CustomNav() {
  const { goToMonth, previousMonth, nextMonth } = useNavigation()

  return (
    <div className="flex items-center justify-between w-full px-4 mb-2">
      <button
        type="button"
        onClick={() => previousMonth && goToMonth(previousMonth)}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 text-muted-foreground hover:text-primary"
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => nextMonth && goToMonth(nextMonth)}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 text-muted-foreground hover:text-primary"
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      numberOfMonths={1}
      showOutsideDays={showOutsideDays}
      locale={enGB}
      className={cn(
        "w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200",
        className
      )}
      components={{
        // @ts-ignore
        Nav: CustomNav,
      }}
      classNames={{
        months: "flex flex-col space-y-4",
        month: "space-y-4",
        caption: "flex justify-center text-xl font-semibold text-gray-900",
        nav: "flex items-center justify-between w-full px-2",
        table: "w-full border-collapse text-sm",
        head_row: "",
        head_cell:
          "text-muted-foreground text-center font-semibold text-xs py-1",
        row: "",
        cell: cn(
          "text-center w-[40px] h-[40px] p-0 align-middle",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-9 h-9 p-0 font-medium text-sm hover:bg-muted focus:outline-none"
        ),
        day_selected:
          "bg-primary text-white hover:bg-primary focus:bg-primary",
        day_today: "border border-primary text-primary font-bold",
        day_outside:
          "text-muted-foreground opacity-50 aria-selected:bg-accent/50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "bg-accent text-accent-foreground",
        day_range_start: "bg-primary text-white rounded-l-md",
        day_range_end: "bg-primary text-white rounded-r-md",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"
export { Calendar }