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
  return <div {...props} className={cn({
    'page-break-always-before': variant === 'always' && position === 'before',
    'page-break-always-after': variant === 'always' && position === 'after',
    'page-break-avoid-before': variant === 'avoid' && position === 'before',
    'page-break-avoid-after': variant === 'avoid' && position === 'after',
  }, props.className)} />;
};