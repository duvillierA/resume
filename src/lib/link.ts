export function isHttpsUrl(link: string | undefined): link is `https://${string}` {
    return link?.startsWith("https://") ?? false;
}

export function isDate(date?: string | null): date is `${number}-${number}` {
    return date?.split("-").every(part => !isNaN(Number(part))) ?? false;
}