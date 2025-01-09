import React, { useState } from 'react';
import { Wand2, Sparkles, Stars, Zap, Copy, Check, Loader2 } from 'lucide-react';
import { enhancePrompt } from '../services/gemini';
// import { enhancePrompt } from '../services/openai';

export function PromptInput() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    setIsTyping(true);
    const timeout = setTimeout(() => setIsTyping(false), 1000);
    return () => clearTimeout(timeout);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error('Gemini API key is not configured. Please check your .env file.');
      }
      const enhancedPrompt = await enhancePrompt(prompt);
      setOutput(enhancedPrompt);
      setShowOutput(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-4 relative">
      {/* Decorative elements */}
      <div className="absolute -left-4 -top-4 w-8 h-8 text-red-400 animate-spin-slow">
        <Stars />
      </div>
      <div className="absolute -right-4 -top-4 w-8 h-8 text-blue-500 animate-bounce">
        <Zap />
      </div>

      <div className="relative group">
        {/* Animated gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 via-red-500/20 to-blue-600/20 rounded-[2rem] blur-xl transition-opacity duration-1000 ${isTyping ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Input area */}
        <div className="relative">
          <textarea
            value={prompt}
            onChange={handlePromptChange}
            placeholder="For a better prompt, tell me what you want to ask AI..."
            className="w-full h-28 rounded-[2rem] p-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent transition-all resize-none relative z-10 text-lg"
            style={{
              boxShadow: isTyping ? '0 0 20px rgba(59, 130, 246, 0.2)' : 'none',
              background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))'
            }}
          />
          
          {/* Interactive elements */}
          <div className="absolute right-4 top-4 flex space-x-2">
            <Sparkles 
              className={`w-5 h-5 text-red-400 transition-all duration-300 ${isTyping ? 'opacity-100 rotate-12' : 'opacity-0'}`}
            />
            <Stars 
              className={`w-5 h-5 text-blue-500 transition-all duration-300 ${isTyping ? 'opacity-100 -rotate-12' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="text-red-400 text-sm mt-2 px-4">
          {error}
        </div>
      )}

      {/* Output section - appears after generation */}
      {showOutput && (
        <div className="relative group mt-6 animate-float">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
          
          <div className="relative rounded-[2rem] p-6" style={{
            background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))'
          }}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-blue-400">Enhanced Prompt</h3>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400 hover:text-white" />
                )}
              </button>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">{output}</p>
          </div>
        </div>
      )}

      {/* Enhanced button */}
      <button 
        onClick={handleGenerate}
        disabled={isLoading || !prompt.trim()}
        className="w-full bg-gradient-to-r from-blue-700 via-red-700 to-blue-700 hover:from-blue-600 hover:via-red-600 hover:to-blue-600 text-white font-medium py-4 px-6 rounded-[2rem] flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 relative group disabled:opacity-50 disabled:cursor-not-allowed border border-blue-400/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl rounded-[2rem] transition-opacity duration-300" />
        {isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <Wand2 className="w-6 h-6 animate-float" />
        )}
        <span className="text-lg">{isLoading ? 'Generating...' : 'Generate Prompt ✨'}</span>
      </button>
    </div>
  );
}