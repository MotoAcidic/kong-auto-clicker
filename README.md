# Apex Exchange Auto Click Script

![Apex Exchange](https://github.com/MotoAcidic/kong-auto-clicker/blob/main/images/Apex.PNG)

This extension automatically clicks at the center of the screen on the [Apex Exchange Kong page](https://omni.apex.exchange/referral?code=XVVZLRH6) to help users claim Solana airdrop tokens. You can specify the number of clicks you want, without any cap.

## About the Folders

- **Extension Folder**: Contains the necessary files to use this as a Chrome extension, allowing you to auto-click without entering code manually.
- **WebPage Folder**: Contains files to host the auto-clicker on your own site within an iframe.
- **Console Folder**: Contains a script you can copy and paste directly into the Chrome Developer Console if you prefer not to use the extension.

## Prerequisites

- **Browser**: Use Chrome, Firefox, or Edge.
- **Wallet Extension**: Install a compatible Solana wallet browser extension (e.g., Phantom or Sollet).
- **Apex Exchange Account**: Make sure you're registered on [Apex Exchange](https://omni.apex.exchange/referral?code=XVVZLRH6).

## Installation for Chrome Extension

1. **Download the Extension Folder**:
   - Clone or download this repository to your local machine.
   - Make sure you have the complete **Extension** folder, with files such as `manifest.json`, `popup.html`, `popup.js`, `content.js`, `popup.css`, and any required images.

2. **Open Chrome Extensions**:
   - In your Chrome browser, go to `chrome://extensions/`.

3. **Enable Developer Mode**:
   - Toggle the **Developer mode** switch in the top right corner.

4. **Upload the Extension Folder**:
   - Click **Load unpacked** and select the **Extension** folder from this repository.
   - The extension should now load and appear in your Chrome extensions list. If there’s an error, check that the `manifest.json` and required files are present.

5. **Confirm Installation**:
   - The Apex Exchange Auto Clicker extension should now appear in your Chrome toolbar.

## Using the Extension

1. **Navigate to the Apex Kong Page**:
   - Go to the [Apex Exchange Kong page](https://www.apex.exchange/kong) in your browser.

2. **Connect Your Wallet**:
   - Locate and click the "Connect Wallet" button on the page.
   - Select your wallet from the list (e.g., Phantom).
   - Authorize the connection within your wallet extension.
   - Ensure that your wallet address appears on the page, confirming the connection.

   ![Kong Page](https://github.com/MotoAcidic/kong-auto-clicker/blob/main/images/kong.PNG)

3. **Open the Extension**:
   - Click the Apex Exchange Auto Clicker icon in your Chrome toolbar.

4. **Set Click Parameters**:
   - **Number of Clicks**: Enter the total number of clicks you want the extension to perform.
   - **Click Interval (ms)**: Enter the time interval (in milliseconds) between each click.
   - **Warning**: Setting an interval below 100ms may lead to a temporary ban on Apex Exchange. You’ll receive a popup warning to help prevent bans.

5. **Start the Auto Clicker**:
   - Click the **Start Auto Clicker** button. The extension will start clicking at the center of the screen at your specified interval.
   - To stop the auto-clicker, simply click the **Stop Clicker** button in the extension popup.

### Additional Hosting Options

- **WebPage Folder**: This folder contains files you can use to host the auto-clicker on your own site. The webpage will load Apex Exchange in an iframe and can initiate clicks from within your custom site setup.
- **Console Folder**: If you prefer to manually execute the clicker in the browser console, this folder contains a script for copy-pasting into Chrome Developer Console.

### Troubleshooting

- **Wallet Not Connecting**: Ensure your wallet extension is installed and enabled. If you're still having issues, try refreshing the page and reconnecting.
- **Invalid Number of Clicks**: If you enter an invalid number, the extension will prompt an error. Adjust the value and try again.
- **Script Not Stopping**: If the **Stop Clicker** button does not work, refresh the page to reset the JavaScript environment.

---

This tool should be used responsibly and in accordance with [Apex Exchange](https://omni.apex.exchange/referral?code=XVVZLRH6)'s terms of service.
