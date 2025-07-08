import React from "react";
import { cn } from "@/lib";
import type { ComponentProps } from "react";

export const Avatar: React.FC<ComponentProps<"img">> = ({ className, ...props }) => (
  <img {...props} className={cn("w-18 h-auto rounded", className)} />
);