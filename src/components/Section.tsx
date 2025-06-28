import React from "react";
import { cn } from "@/lib/class";
import { Markdown } from "@/components/common/Markdown";

type MarkdownContent = Parameters<typeof Markdown>[0]['children'];

interface SectionBaseProps {
  title: string;
  className?: string;
  children: React.ReactNode;
  asMarkdown?: false;
}

interface SectionMarkdownProps {
  title: string;
  className?: string;
  children: MarkdownContent;
  asMarkdown: true;
}

type SectionProps = SectionBaseProps | SectionMarkdownProps;

/**
 * Section component that can render regular React nodes or markdown content
 * @property {string} title - The title of the section
 * @property {string} [className] - Optional CSS class names
 * @property {React.ReactNode | MarkdownContent} children - Content to render (React nodes or markdown)
 * @property {boolean} [asMarkdown] - If true, renders children as markdown
 * @returns {JSX.Element} Rendered section
 */
export const Section: React.FC<SectionProps> = ({ title, children, className, asMarkdown }) => (
  <section className={cn("flex flex-col gap-2", className)}>
    <h2 className="text-xl font-bold text-heading">{title}</h2>
    {asMarkdown === true ? <Markdown>{children}</Markdown> : children}
  </section>
);
