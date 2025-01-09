chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'STORE_PROMPT') {
    chrome.storage.local.set({ prompt: request.prompt });
  }
}); 