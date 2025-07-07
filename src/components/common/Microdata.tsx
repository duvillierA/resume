import type { ComponentProps } from "react";

interface MicrodataProps extends Omit<ComponentProps<"script">, "type" | "dangerouslySetInnerHTML"> {
  data: {
    "@context": string;
    "@type": string;
    [key: string]: unknown;
  };
}

export const Microdata: React.FC<MicrodataProps> = ({ data, ...props }) => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} {...props} />
  );
};