import React from "react";
import { cn } from "@/lib/class";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className }) => (
  <section className={cn("flex flex-col gap-2", className)}>
    <h2 className="text-xl font-bold text-heading">{title}</h2>
    {children}
  </section>
);
