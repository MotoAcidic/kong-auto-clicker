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