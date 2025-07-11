import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";

export const Markdown: React.FC<ComponentProps<typeof ReactMarkdown>> = ({ children, ...props }) => {
  return <ReactMarkdown
  components={{
    a: ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside ml-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside ml-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li>{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
  }}
  {...props}
  >{children}</ReactMarkdown>;
};