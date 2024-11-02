# Apex Exchange Auto Click Script

![Apex Exchange](./images/Apex.png)

This JavaScript script automatically clicks at the center of the screen on the [Apex Exchange Kong page](https://omni.apex.exchange/referral?code=XVVZLRH6) to help users claim Solana airdrop tokens. You can specify the number of clicks you want, up to the daily limit of 999 clicks.

## Prerequisites

- **Browser**: Use Chrome, Firefox, or Edge.
- **Wallet Extension**: Install a compatible Solana wallet browser extension (e.g., Phantom or Sollet).
- **Apex Exchange Account**: Make sure you're registered on [Apex Exchange](https://omni.apex.exchange/referral?code=XVVZLRH6).

## Connecting Your Wallet

1. **Visit the Apex Kong Page**: Open [https://www.apex.exchange/kong](https://www.apex.exchange/kong) in your browser.
2. **Connect Wallet**:
   - Locate and click the "Connect Wallet" button on the page.
   - Select your wallet from the list (e.g., Phantom).
   - Authorize the connection within your wallet extension.
3. **Verify Connection**: After connecting, ensure that your wallet address appears on the page. You are now ready to participate in the airdrop.

![Kong Page](./images/kong.png)

## Running the Auto-Click Script

1. **Open Developer Console**:
   - Right-click anywhere on the webpage.
   - Select **Inspect** (or **Inspect Element**).
   - Go to the **Console** tab in the Developer Tools panel.

2. **Copy and Paste the Script**: Copy the following code and paste it into the Console:

   ```javascript
   // Prompt the user to enter the number of clicks (e.g., up to 999)
   const totalClicks = parseInt(prompt("Enter the number of clicks (up to 999): "), 10);

   if (isNaN(totalClicks) || totalClicks <= 0 || totalClicks > 999) {
       console.error("Invalid number of clicks. Please enter a number between 1 and 999.");
   } else {
       let clickCount = 0;

       // Function to click at the center of the screen
       function clickCenterScreen() {
           // Calculate the center coordinates of the screen
           const centerX = window.innerWidth / 2;
           const centerY = window.innerHeight / 2;

           // Create a new mouse event
           const clickEvent = new MouseEvent("click", {
               bubbles: true,
               cancelable: true,
               clientX: centerX,
               clientY: centerY
           });

           // Dispatch the event at the center of the screen
           document.elementFromPoint(centerX, centerY).dispatchEvent(clickEvent);
           console.log(`Clicked at center (${centerX}, ${centerY}) - Click #${clickCount + 1}`);

           clickCount += 1;
           if (clickCount >= totalClicks) {
               clearInterval(clickInterval); // Stop clicking when reaching the specified number
               console.log("Auto-clicking stopped after reaching the specified count.");
           }
       }

       // Set interval to repeat clicking every second
       const clickInterval = setInterval(clickCenterScreen, 1000);
   }
