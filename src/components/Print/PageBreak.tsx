import { cn } from "@/lib";
import type { ComponentProps } from "react";

type PageBreakProps = {
  variant: "always" | "avoid"
  position: "before" | "after"
} & ComponentProps<"div">

export const PageBreak = ({
  variant,
  position,
  ...props
}: PageBreakProps) => {
  return <div {...props} className={cn(`page-break-${variant}-${position}`, props.className)} />;
};