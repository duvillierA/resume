interface MicrodataProps {
  data: {
    "@context": string;
    "@type": string;
    [key: string]: unknown;
  };
}

export const Microdata = ({ data }: MicrodataProps) => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
};