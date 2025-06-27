import { formatPartialDate } from "@/lib/date";

interface FormatPartialDateProps {
  date: `${number}-${number}`;
}

export const FormatPartialDate: React.FC<FormatPartialDateProps> = ({ date }) => {
  if (!date) return null;
  return <>{formatPartialDate(date)}</>;
};