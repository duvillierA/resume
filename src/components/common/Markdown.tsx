import ReactMarkdown from "react-markdown";

export const Markdown = ({ children }: { children: Parameters<typeof ReactMarkdown>[0]['children'] }) => {
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
  >{children}</ReactMarkdown>;
};