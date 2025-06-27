export type PartialDate = `${number}-${number}`;

export function isPartialDate(date?: string | null): date is PartialDate {
    return date?.split("-").every(part => !isNaN(Number(part))) ?? false;
}

export function formatPartialDate(date: `${number}-${number}`): string {
    return date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "";
}