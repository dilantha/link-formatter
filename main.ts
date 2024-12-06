import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { formatLinkList } from './utils';

export default class LinkFormatterPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'link-formatter',
            name: 'Format links to unordered list',
            editorCallback: (editor: Editor, view: MarkdownView) => {
                if (editor.somethingSelected()) {
                    const selectedText = editor.getSelection();
                    const formattedText = formatLinkList(selectedText);
                    editor.replaceSelection(formattedText);
                }
            }
        });
    }

    onunload() {
        // Clean up when plugin is disabled
    }
}