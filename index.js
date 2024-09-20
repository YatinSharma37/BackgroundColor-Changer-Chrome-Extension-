// Store the default background color in a constant
const defaultColor = getComputedStyle(document.body).backgroundColor;

// Function to change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Add event listeners for each color button
document.getElementById('redBtn').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: changeBackgroundColor,
        args: ['red']
    });
});

document.getElementById('blueBtn').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: changeBackgroundColor,
        args: ['blue']
    });
});

document.getElementById('greenBtn').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: changeBackgroundColor,
        args: ['green']
    });
});

document.getElementById('yellowBtn').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: changeBackgroundColor,
        args: ['yellow']
    });
});

// Add event listener for the default button
document.getElementById('defaultBtn').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: changeBackgroundColor,
        args: [defaultColor] // Reset to the stored original background color
    });
});
