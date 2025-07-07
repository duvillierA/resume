export function isHttpsUrl(link?: string): link is `https://${string}` {
    return link?.startsWith("https://") ?? false;
} 