import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class LinkFormatterPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'link-formatter',
            name: 'Format links to unordered list',
            editorCallback: (editor: Editor, view: MarkdownView) => {
                const selectedText = editor.getSelection();
                const formattedText = this.formatLinkList(selectedText);
                editor.replaceSelection(formattedText);
            }
        });
    }

    formatLinkList(input: string): string {
        // Regex to match markdown-style links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        
        // Find all matches
        const links = [...input.matchAll(linkRegex)];
    
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
            
    onunload() {
        // Clean up when plugin is disabled
    }
}