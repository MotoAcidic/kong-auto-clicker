document.addEventListener("DOMContentLoaded", () => {
    const clickCountInput = document.getElementById("clickCount");
    const clickIntervalInput = document.getElementById("clickInterval");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");

    chrome.storage.local.get("isRunning", (result) => {
        if (result.isRunning) {
            startButton.style.display = "none";
            stopButton.style.display = "block";
            clickCountInput.disabled = true;
            clickIntervalInput.disabled = true;
        } else {
            startButton.style.display = "block";
            stopButton.style.display = "none";
            clickCountInput.disabled = false;
            clickIntervalInput.disabled = false;
        }
    });

    startButton.addEventListener("click", () => {
        const totalClicks = parseInt(clickCountInput.value, 10);
        const clickInterval = parseInt(clickIntervalInput.value, 10);

        if (isNaN(totalClicks) || totalClicks <= 0) {
            alert("Please enter a valid positive number of clicks.");
            return;
        }

        if (isNaN(clickInterval) || clickInterval < 10) {
            alert("Please enter a valid interval of at least 10 milliseconds.");
            return;
        } 
        
        // Warn the user if the interval is below 100ms
        if (clickInterval < 100) {
            const proceed = confirm("Warning: Choosing an interval lower than 100ms may lead to a IP ban, if you get banned just use a VPN until the time frame for the ban is lifted. Do you want to continue?");
            if (!proceed) {
                return; // Exit if user does not want to proceed
            }
        }

        // Send a message to start the clicker with the interval only if the user confirmed
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "startClicker", totalClicks: totalClicks, clickInterval: clickInterval }, () => {
                if (chrome.runtime.lastError) {
                    console.warn("Warning: Could not start the clicker. This may happen if the script is not available on the current tab.");
                }
            });
        });

        // Toggle buttons, disable inputs, and save running state
        startButton.style.display = "none";
        stopButton.style.display = "block";
        clickCountInput.disabled = true;
        clickIntervalInput.disabled = true;
        chrome.storage.local.set({ isRunning: true });
    });

    stopButton.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "stopClicker" }, () => {
                if (chrome.runtime.lastError) {
                    console.warn("Warning: Could not stop the clicker. This may happen if the script is not available on the current tab.");
                }
            });
        });

        startButton.style.display = "block";
        stopButton.style.display = "none";
        clickCountInput.disabled = false;
        clickIntervalInput.disabled = false;
        chrome.storage.local.set({ isRunning: false });
    });
});
