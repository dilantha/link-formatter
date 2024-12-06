export function formatLinkList(input: string): string {
    // Regex to match markdown-style links
    const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
    
    // Find all matches
    const links = [...input.matchAll(linkRegex)];

    if (links.length === 0) return '';

    // Create a unique set of links to remove duplicates
    const uniqueLinks = Array.from(new Set(links.map(match => match[2])))
        .map(url => {
            // Find the first link with this URL
            const matchingLink = links.find(match => match[2] === url);
            return matchingLink || [null, url, url];
        });

    // Format links into a markdown list
    return uniqueLinks
        .map(match => {
            const title = match[1] || match[2];
            const url = match[2];
            return `- [${title}](${url})`;
        })
        .join('\n');
}
