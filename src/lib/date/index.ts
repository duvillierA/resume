export type PartialDate = `${number}${number}${number}${number}-${number}${number}`;

export function isPartialDate(date?: string | null): date is PartialDate {
    const regex = /^\d{4}-\d{2}$/;
    return !!date && regex.test(date);
}

export function formatPartialDate(date: PartialDate, locale = "en-US") {
    return date ? new Date(date).toLocaleDateString(locale, { year: "numeric", month: "short" }) : "";
} 