# Apex Exchange Auto Click Script

![Apex Exchange](https://github.com/MotoAcidic/kong-auto-clicker/blob/main/images/Apex.PNG)

This JavaScript script automatically clicks at the center of the screen on the [Apex Exchange Kong page](https://omni.apex.exchange/referral?code=XVVZLRH6) to help users claim Solana airdrop tokens. You can specify the number of clicks you want, without any cap.

## Prerequisites

- **Browser**: Use Chrome, Firefox, or Edge.
- **Wallet Extension**: Install a compatible Solana wallet browser extension (e.g., Phantom or Sollet).
- **Apex Exchange Account**: Make sure you're registered on [Apex Exchange](https://omni.apex.exchange/referral?code=XVVZLRH6).

## Connecting Your Wallet

1. **Visit the Apex Kong Page**: Open [https://www.apex.exchange/kong](https://omni.apex.exchange/referral?code=XVVZLRH6) in your browser.
2. **Connect Wallet**:
   - Locate and click the "Connect Wallet" button on the page.
   - Select your wallet from the list (e.g., Phantom).
   - Authorize the connection within your wallet extension.
3. **Verify Connection**: After connecting, ensure that your wallet address appears on the page. You are now ready to participate in the airdrop.

![Kong Page](https://github.com/MotoAcidic/kong-auto-clicker/blob/main/images/kong.PNG)

## Running the Auto-Click Script

1. **Open Developer Console**:
   - Right-click anywhere on the webpage.
   - Select **Inspect** (or **Inspect Element**).
   - Go to the **Console** tab in the Developer Tools panel.

2. **Copy and Paste the Script**: Copy the following code and paste it into the Console:

   ```javascript
   // Prompt the user to enter the number of clicks
   const totalClicks = parseInt(prompt("Enter the number of clicks:"), 10);

   if (isNaN(totalClicks) || totalClicks <= 0) {
       console.error("Invalid number of clicks. Please enter a positive number.");
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
               removeStopButton();
           }
       }

       // Set interval to repeat clicking every 100ms, so 10 clicks per second
       const clickInterval = setInterval(clickCenterScreen, 100);

       // Function to create the "Stop Clicker" button
       function createStopButton() {
           const stopButton = document.createElement("button");
           stopButton.innerText = "Stop Clicker";
           stopButton.style.position = "fixed";
           stopButton.style.top = "20px";
           stopButton.style.right = "20px";
           stopButton.style.padding = "10px 20px";
           stopButton.style.fontSize = "16px";
           stopButton.style.zIndex = "1000";
           stopButton.style.backgroundColor = "#ff4d4d";
           stopButton.style.color = "white";
           stopButton.style.border = "none";
           stopButton.style.borderRadius = "5px";
           stopButton.style.cursor = "pointer";

           // Add an event listener to stop the clicker when clicked
           stopButton.addEventListener("click", () => {
               clearInterval(clickInterval);
               console.log("Auto-clicking stopped manually.");
               removeStopButton();
           });

           document.body.appendChild(stopButton);
       }

       // Function to remove the "Stop Clicker" button
       function removeStopButton() {
           const stopButton = document.querySelector("button");
           if (stopButton) {
               stopButton.remove();
           }
       }

       // Create the "Stop Clicker" button when the script starts
       createStopButton();
   }
3. **Enter Click Count**

When you press **Enter** after pasting the code, a popup will appear in the center of the screen, prompting you to enter the number of clicks you want to perform.

![Popup Example](https://github.com/MotoAcidic/kong-auto-clicker/blob/main/images/popup.PNG)

Enter the desired number of clicks in the popup, then press **OK**. The script will begin clicking at the center of the screen at the specified interval and will stop automatically once it reaches the count.

### Stopping the Auto-Click Script Early

In addition to stopping automatically, you can also manually stop the script at any time by using the **Stop Clicker** button.

![Stop Clicker Example](https://github.com/MotoAcidic/kong-auto-clicker/blob/main/images/StopClicker.PNG)

The "Stop Clicker" button will appear in the top-right corner of the screen when the script is running. Simply click this button to immediately stop the auto-clicking process. The button will disappear automatically when the clicking stops.

### Troubleshooting

- **Wallet Not Connecting**: Ensure your wallet extension is installed and enabled. If you're still having issues, try refreshing the page and reconnecting.
- **Invalid Number of Clicks**: If you enter an invalid number, the script will prompt an error in the console. Reload the page and try again.
- **Script Not Stopping**: If the **Stop Clicker** button does not work, or if you can't see it, type `clearInterval(clickInterval);` into the console and press **Enter** to stop the script manually.

---

This script is a simple automation tool and should be used in accordance with [Apex Exchange](https://omni.apex.exchange/referral?code=XVVZLRH6)'s terms of service.

