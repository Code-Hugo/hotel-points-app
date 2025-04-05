"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUpIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LoyaltyProgram } from "@/polymet/data/loyalty-programs-data";

interface PointsResultDisplayProps {
  points: number;
  program?: LoyaltyProgram;
  className?: string;
  isCalculating?: boolean;
}

export default function PointsResultDisplay({
  points,
  program,
  className,
  isCalculating = false,
}: PointsResultDisplayProps) {
  const formattedPoints = new Intl.NumberFormat("en-US").format(
    Math.round(points),
  );

  return (
    <Card
      className={cn(
        "overflow-hidden backdrop-blur-sm bg-white/70 dark:bg-slate-800/50 shadow-sm transition-all duration-300",
        program
          ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-900"
          : "",
        className,
      )}
      style={
        program
          ? {
              borderColor: "transparent",
              ringColor: program.brandColor,
            }
          : {}
      }
      data-pol-id="jui4ti"
      data-pol-file-name="points-result-display"
      data-pol-file-type="component"
    >
      <CardContent
        className="p-6"
        data-pol-id="z9i230"
        data-pol-file-name="points-result-display"
        data-pol-file-type="component"
      >
        <div
          className="flex flex-col items-center space-y-3"
          data-pol-id="n4gqsw"
          data-pol-file-name="points-result-display"
          data-pol-file-type="component"
        >
          <div
            className="text-sm font-medium text-slate-500 dark:text-slate-400"
            data-pol-id="2jtnvq"
            data-pol-file-name="points-result-display"
            data-pol-file-type="component"
          >
            Estimated Points
          </div>

          {isCalculating ? (
            <div
              className="h-16 flex items-center justify-center"
              data-pol-id="b52e8t"
              data-pol-file-name="points-result-display"
              data-pol-file-type="component"
            >
              <div
                className="flex space-x-2"
                data-pol-id="qdujee"
                data-pol-file-name="points-result-display"
                data-pol-file-type="component"
              >
                <motion.div
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor:
                      program?.brandColor || "hsl(var(--primary))",
                  }}
                  data-pol-id="5sspdm"
                  data-pol-file-name="points-result-display"
                  data-pol-file-type="component"
                ></motion.div>
                <motion.div
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor:
                      program?.brandColor || "hsl(var(--primary))",
                  }}
                  data-pol-id="fogxp7"
                  data-pol-file-name="points-result-display"
                  data-pol-file-type="component"
                ></motion.div>
                <motion.div
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor:
                      program?.brandColor || "hsl(var(--primary))",
                  }}
                  data-pol-id="q6o0x5"
                  data-pol-file-name="points-result-display"
                  data-pol-file-type="component"
                ></motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              key={formattedPoints}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
              data-pol-id="2o7eky"
              data-pol-file-name="points-result-display"
              data-pol-file-type="component"
            >
              <span
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r"
                style={
                  program
                    ? {
                        backgroundImage: `linear-gradient(to right, ${program.brandColor}, ${program.secondaryColor || program.brandColor})`,
                      }
                    : {
                        backgroundImage:
                          "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))",
                      }
                }
                data-pol-id="xu2ccm"
                data-pol-file-name="points-result-display"
                data-pol-file-type="component"
              >
                {formattedPoints}
              </span>
              {points > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  data-pol-id="3qbxr1"
                  data-pol-file-name="points-result-display"
                  data-pol-file-type="component"
                >
                  <TrendingUpIcon
                    className="ml-2 h-5 w-5"
                    style={{
                      color: program?.brandColor || "hsl(var(--primary))",
                    }}
                    data-pol-id="hq1ykt"
                    data-pol-file-name="points-result-display"
                    data-pol-file-type="component"
                  />
                </motion.div>
              )}
            </motion.div>
          )}

          {program && (
            <div
              className="text-sm font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${program.brandColor}20`,
                color: program.brandColor,
              }}
              data-pol-id="kwmqxi"
              data-pol-file-name="points-result-display"
              data-pol-file-type="component"
            >
              {program.name} Points
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
