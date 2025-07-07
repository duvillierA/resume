import { formatPartialDate, isPartialDate } from "@/lib";


export const FormatPartialDate: React.FC<{ date: string }> = ({ date }) => {
  return isPartialDate(date) ? formatPartialDate(date) : null;
};