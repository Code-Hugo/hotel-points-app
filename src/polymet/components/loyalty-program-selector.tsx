"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  LOYALTY_PROGRAMS,
  LoyaltyProgram,
} from "@/polymet/data/loyalty-programs-data";

interface LoyaltyProgramSelectorProps {
  selectedProgram: LoyaltyProgram | undefined;
  onProgramChange: (program: LoyaltyProgram) => void;
  className?: string;
}

export default function LoyaltyProgramSelector({
  selectedProgram,
  onProgramChange,
  className,
}: LoyaltyProgramSelectorProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={cn("grid gap-2", className)}
      data-pol-id="4u4qyx"
      data-pol-file-name="loyalty-program-selector"
      data-pol-file-type="component"
    >
      <Label
        htmlFor="loyalty-program"
        className="text-slate-700 dark:text-slate-300"
        data-pol-id="c1rwid"
        data-pol-file-name="loyalty-program-selector"
        data-pol-file-type="component"
      >
        Loyalty program
      </Label>
      <Popover
        open={open}
        onOpenChange={setOpen}
        data-pol-id="56t9xn"
        data-pol-file-name="loyalty-program-selector"
        data-pol-file-type="component"
      >
        <PopoverTrigger
          asChild
          data-pol-id="2plxr6"
          data-pol-file-name="loyalty-program-selector"
          data-pol-file-type="component"
        >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between border transition-all duration-300",
              selectedProgram
                ? "bg-white dark:bg-slate-900 shadow-sm"
                : "bg-white dark:bg-slate-900",
              className,
            )}
            style={
              selectedProgram
                ? {
                    borderColor: selectedProgram.brandColor,
                    borderWidth: "1px",
                    boxShadow: `0 0 0 1px ${selectedProgram.brandColor}20`,
                  }
                : {}
            }
            data-pol-id="n08vzk"
            data-pol-file-name="loyalty-program-selector"
            data-pol-file-type="component"
          >
            {selectedProgram ? (
              <div
                className="flex items-center"
                data-pol-id="djwi57"
                data-pol-file-name="loyalty-program-selector"
                data-pol-file-type="component"
              >
                <div
                  className="w-5 h-5 rounded-full mr-2 shadow-sm overflow-hidden flex items-center justify-center"
                  data-pol-id="5s8udr"
                  data-pol-file-name="loyalty-program-selector"
                  data-pol-file-type="component"
                >
                  <img
                    src={selectedProgram.logo}
                    alt={selectedProgram.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="font-medium"
                  data-pol-id="sfj3w5"
                  data-pol-file-name="loyalty-program-selector"
                  data-pol-file-type="component"
                >
                  {selectedProgram.name}
                </span>
              </div>
            ) : (
              <span
                className="text-slate-500 dark:text-slate-400"
                data-pol-id="1ncpr4"
                data-pol-file-name="loyalty-program-selector"
                data-pol-file-type="component"
              >
                Select loyalty program
              </span>
            )}
            <ChevronsUpDown
              className="ml-2 h-4 w-4 shrink-0 opacity-50"
              data-pol-id="4njyhs"
              data-pol-file-name="loyalty-program-selector"
              data-pol-file-type="component"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full p-0 shadow-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          data-pol-id="bs1d4f"
          data-pol-file-name="loyalty-program-selector"
          data-pol-file-type="component"
        >
          <Command
            className="rounded-lg"
            data-pol-id="70myc8"
            data-pol-file-name="loyalty-program-selector"
            data-pol-file-type="component"
          >
            <CommandInput
              placeholder="Search loyalty program..."
              className="border-none focus:ring-0 text-slate-700 dark:text-slate-300"
              data-pol-id="kr3f1e"
              data-pol-file-name="loyalty-program-selector"
              data-pol-file-type="component"
            />

            <CommandEmpty
              className="text-slate-500 dark:text-slate-400 py-3"
              data-pol-id="m69r3s"
              data-pol-file-name="loyalty-program-selector"
              data-pol-file-type="component"
            >
              No loyalty program found.
            </CommandEmpty>
            <CommandGroup
              className="py-2"
              data-pol-id="l192f1"
              data-pol-file-name="loyalty-program-selector"
              data-pol-file-type="component"
            >
              {LOYALTY_PROGRAMS.map((program, index) => (
                <CommandItem
                  key={program.id}
                  value={program.id}
                  onSelect={() => {
                    onProgramChange(program);
                    setOpen(false);
                  }}
                  className="flex items-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 py-2"
                  data-pol-id={`cyo77p_${index}`}
                  data-pol-file-name="loyalty-program-selector"
                  data-pol-file-type="component"
                >
                  <div
                    className="flex items-center gap-3 w-full"
                    data-pol-id={`rncexm_${index}`}
                    data-pol-file-name="loyalty-program-selector"
                    data-pol-file-type="component"
                  >
                    <div
                      className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center"
                      data-pol-id={`xy3fgc_${index}`}
                      data-pol-file-name="loyalty-program-selector"
                      data-pol-file-type="component"
                    >
                      <img
                        src={program.logo}
                        alt={program.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className="font-medium text-slate-700 dark:text-slate-300"
                      data-pol-id={`3jqc9g_${index}`}
                      data-pol-file-name="loyalty-program-selector"
                      data-pol-file-type="component"
                    >
                      {program.name}
                    </span>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedProgram?.id === program.id
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                      style={{ color: program.brandColor }}
                      data-pol-id={`lur1ak_${index}`}
                      data-pol-file-name="loyalty-program-selector"
                      data-pol-file-type="component"
                    />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}