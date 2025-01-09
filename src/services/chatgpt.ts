const CHATGPT_TOKEN_KEY = 'chatgpt_session_token';

export const ChatGPTService = {
  getToken: (): string | null => {
    return localStorage.getItem(CHATGPT_TOKEN_KEY);
  },

  setToken: (token: string): void => {
    localStorage.setItem(CHATGPT_TOKEN_KEY, token);
  },

  removeToken: (): void => {
    localStorage.removeItem(CHATGPT_TOKEN_KEY);
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(CHATGPT_TOKEN_KEY);
  },

  openChatGPT: (prompt: string): void => {
    // Copy to clipboard
    navigator.clipboard.writeText(prompt).then(() => {
      // Open ChatGPT
      window.open('https://chat.openai.com/chat', '_blank');
      
      // Show notification
      const notification = document.createElement('div');
      notification.className = 'fixed bottom-4 right-4 bg-gradient-to-r from-cyan-900 to-emerald-900 text-cyan-200 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
      notification.textContent = 'Prompt copied! Press Ctrl+V (Cmd+V on Mac) in ChatGPT';
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 3000);
    }).catch(err => {
      console.error('Failed to copy prompt:', err);
      // Open ChatGPT anyway
      window.open('https://chat.openai.com/chat', '_blank');
    });
  }
}; 