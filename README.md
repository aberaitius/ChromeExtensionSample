
░██████╗░██╗░░░██╗░█████╗░████████╗███████╗  ░██████╗░███████╗███╗░░██╗███████╗██████╗░░█████╗░████████╗░█████╗░██████╗░
██╔═══██╗██║░░░██║██╔══██╗╚══██╔══╝██╔════╝  ██╔════╝░██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗
██║██╗██║██║░░░██║██║░░██║░░░██║░░░█████╗░░  ██║░░██╗░█████╗░░██╔██╗██║█████╗░░██████╔╝███████║░░░██║░░░██║░░██║██████╔╝
╚██████╔╝██║░░░██║██║░░██║░░░██║░░░██╔══╝░░  ██║░░╚██╗██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██╔══██║░░░██║░░░██║░░██║██╔══██╗
░╚═██╔═╝░╚██████╔╝╚█████╔╝░░░██║░░░███████╗  ╚██████╔╝███████╗██║░╚███║███████╗██║░░██║██║░░██║░░░██║░░░╚█████╔╝██║░░██║
░░░╚═╝░░░░╚═════╝░░╚════╝░░░░╚═╝░░░╚══════╝  ░╚═════╝░╚══════╝╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

░█████╗░██╗░░██╗██████╗░░█████╗░███╗░░░███╗███████╗
██╔══██╗██║░░██║██╔══██╗██╔══██╗████╗░████║██╔════╝
██║░░╚═╝███████║██████╔╝██║░░██║██╔████╔██║█████╗░░
██║░░██╗██╔══██║██╔══██╗██║░░██║██║╚██╔╝██║██╔══╝░░
╚█████╔╝██║░░██║██║░░██║╚█████╔╝██║░╚═╝░██║███████╗
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚══════╝

███████╗██╗░░██╗████████╗███████╗███╗░░██╗░██████╗██╗░█████╗░███╗░░██╗
██╔════╝╚██╗██╔╝╚══██╔══╝██╔════╝████╗░██║██╔════╝██║██╔══██╗████╗░██║
█████╗░░░╚███╔╝░░░░██║░░░█████╗░░██╔██╗██║╚█████╗░██║██║░░██║██╔██╗██║
██╔══╝░░░██╔██╗░░░░██║░░░██╔══╝░░██║╚████║░╚═══██╗██║██║░░██║██║╚████║
███████╗██╔╝╚██╗░░░██║░░░███████╗██║░╚███║██████╔╝██║╚█████╔╝██║░╚███║
╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚══╝╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝

# Quote Generator Chrome Extension

This is a simple Chrome extension that fetches a new quote from an API and displays it in a popup.

## Features

- Fetch a random quote from an API.
- Display the quote in a clean, modern popup.
- Easily refresh to get a new quote.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch at the top right.
4. Click "Load unpacked" and select the folder where you downloaded/cloned this repository.

## Files

- `manifest.json`: The configuration file for the Chrome extension.
- `popup.html`: The HTML file for the popup.
- `popup.css`: The CSS file for styling the popup.
- `popup.js`: The JavaScript file for fetching and displaying quotes.
- `icon16.png`, `icon48.png`, `icon128.png`: The icons for the extension.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. The popup will display a random quote.
3. Click the "New Quote" button to fetch a new quote.

## Development

### manifest.json

```json
{
  "manifest_version": 3,
  "name": "Quote Generator",
  "version": "1.0",
  "description": "Get a new quote every time you open this extension.",
  "permissions": [],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon16.png",
      "48": "icon48.png",
      "128": "icon128.png"
    }
  }
}
