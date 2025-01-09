function pastePrompt() {
  chrome.storage.local.get(['prompt'], (result) => {
    if (result.prompt) {
      const textArea = document.querySelector('textarea');
      if (textArea) {
        textArea.value = result.prompt;
        textArea.dispatchEvent(new Event('input', { bubbles: true }));
        // Clear the stored prompt
        chrome.storage.local.remove('prompt');
      } else {
        // If textarea not found, retry after a short delay
        setTimeout(pastePrompt, 500);
      }
    }
  });
}

// Try to paste when page loads
pastePrompt(); 