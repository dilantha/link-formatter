# Link Formatter

Formats a block of links into a clean markdown list in Obsidian.

Here I'm pasting links from Firefox bookmarks and formatting them.

![Pasting and formatting](link-formatter.gif)

## Installing from BRAT

First install the [BRAT](https://tfthacker.com/BRAT) plugin. 

Then either from the BRAT settings page, or from the command palette, select "Add beta plugin". Paste the plugin URL https://github.com/dilantha/obsidian-link-formatter and then install.

## How to use

Once installed select the links you want to format and search for `Link Formatter: Format links to unordered list` in the command pallet.

Once you select that the links will be formatted. You can also setup a hotkey for this command.

## Development

This plugin uses a Makefile to streamline development tasks. Here are the available commands:

- `make install` - Install dependencies using pnpm
- `make build` - Build the project
- `make test` - Run tests
- `make dev` - Run in development mode with auto-rebuilding
- `make clean` - Clean build artifacts
- `make all` - Run install, build, and test in sequence

For releases:
- `make release-major` - Release a major version
- `make release-minor` - Release a minor version
- `make release-patch` - Release a patch version

> [Link to plugin](https://github.com/dilantha/obsidian-link-formatter)
> [Buy me a coffee](https://buymeacoffee.com/dilantha)
