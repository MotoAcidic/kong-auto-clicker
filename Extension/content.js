let clickInterval;
let clickCount = 0;
let totalClicks = 0;
let intervalTime = 100; // Default interval in milliseconds

function clickCenterScreen() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: centerX,
        clientY: centerY
    });
    document.elementFromPoint(centerX, centerY).dispatchEvent(clickEvent);
    console.log(`Clicked at center (${centerX}, ${centerY}) - Click #${clickCount + 1}`);
    clickCount += 1;

    if (clickCount >= totalClicks) {
        stopClicker();
    }
}

function startClicker(clicks, interval) {
    console.log("Starting clicker with", clicks, "clicks and interval", interval, "ms");
    clickCount = 0;
    totalClicks = clicks;
    intervalTime = interval;
    clickInterval = setInterval(clickCenterScreen, intervalTime);
    chrome.storage.local.set({ isRunning: true });
}

function stopClicker() {
    console.log("Stopping clicker");
    clearInterval(clickInterval);
    chrome.storage.local.set({ isRunning: false });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received message:", request);
    if (request.action === "startClicker") {
        startClicker(request.totalClicks, request.clickInterval);
    } else if (request.action === "stopClicker") {
        stopClicker();
    }
});
