import { Editor, MarkdownView, Plugin } from 'obsidian';
import { formatLinkList } from './utils';

export default class LinkFormatterPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'link-formatter',
            name: 'Format links to unordered list',
            editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => {
                if (checking) {
                    return !!editor.somethingSelected();
                }
                const selectedText = editor.getSelection();
                const formattedText = formatLinkList(selectedText);
                editor.replaceSelection(formattedText);
            }
        });
    }

    onunload() {
        // Clean up when plugin is disabled
    }
}