import React, { type ComponentProps } from "react";
import { cn } from "@/lib";
import { Markdown } from "@/components/common/Markdown";

type MarkdownContent = ComponentProps<typeof Markdown>['children'];

interface SectionBaseProps extends ComponentProps<"section"> {
  title: string;
}

interface SectionNodeProps {
  children: React.ReactNode;
  asMarkdown?: false;
}

interface SectionMarkdownProps {
  children: MarkdownContent;
  asMarkdown: true;
}

type SectionProps = SectionBaseProps & (SectionNodeProps | SectionMarkdownProps);

/**
 * Section component that can render regular React nodes or markdown content
 * @property {string} title - The title of the section
 * @property {boolean} asMarkdown - If true, renders children as markdown
 * @property {React.ReactNode | MarkdownContent} children - Content to render (React nodes or markdown)
 * @property {ComponentProps<"section">} [props] - Additional props for the section element
 * @returns {ElementType<"section">} Rendered section
 */
export const Section: React.FC<SectionProps> = ({ title, children, className, asMarkdown, ...props }) => (
  <section {...props} className={cn("flex flex-col gap-2", className)} >
    <h2 className="text-xl font-bold text-heading">{title}</h2>
    {asMarkdown === true ? <Markdown>{children}</Markdown> : children}
  </section>
);
