import React, { useEffect, useState } from 'react';
import { PromptInput } from './components/PromptInput';
import { Sparkles, Stars, Github, Linkedin } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-8 relative overflow-hidden"
         style={{
           background: 'linear-gradient(to bottom right, rgb(10, 15, 30), rgb(23, 37, 84))'
         }}>
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-animate bg-gradient-to-br from-blue-900/30 via-red-800/10 to-blue-900/30" />
      
      {/* Interactive background elements */}
      <div className="absolute inset-0">
        {/* Orbital particles with enhanced colors */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orbit-${i}`}
            className="absolute left-1/2 top-1/2 animate-orbit"
            style={{
              '--orbit-radius': `${150 + i * 50}px`,
              '--orbit-speed': `${25 + i * 5}s`,
            } as React.CSSProperties}
          >
            <div 
              className="absolute w-2 h-2 rounded-full animate-glow"
              style={{
                backgroundColor: i % 2 === 0 
                  ? `rgba(${Math.random() * 50 + 100}, ${Math.random() * 50 + 150}, 255, 0.7)`
                  : `rgba(255, ${Math.random() * 50 + 100}, ${Math.random() * 50 + 100}, 0.7)`,
                filter: 'blur(1px)',
              }}
            />
          </div>
        ))}

        {/* Enhanced floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-glow rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 3 === 0
                ? `rgba(255, ${Math.random() * 50 + 100}, ${Math.random() * 50 + 100}, 0.5)`
                : `rgba(${Math.random() * 50 + 100}, ${Math.random() * 50 + 150}, 255, 0.5)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}

        {/* Enhanced mouse follower effect */}
        <div
          className="pointer-events-none absolute w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(29, 78, 216, 0) 70%)`,
            transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Social Media Links */}
      <div className="fixed top-6 right-6 flex space-x-4">
        <a
          href="https://github.com/Pranav123415"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-110 hover:rotate-12 border border-gray-700 group"
        >
          <Github className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/pranav-kumar-b1a360245"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-110 hover:-rotate-12 border border-gray-700 group"
        >
          <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
        </a>
      </div>

      <div className="w-full max-w-3xl space-y-12 relative z-10">
        {/* Enhanced title with floating animation */}
        <div className="text-center space-y-4 animate-float">
          <div className="flex items-center justify-center space-x-3">
            <Stars className="w-10 h-10 text-red-400 animate-spin-slow" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
              PromGenAI
            </h1>
            <Sparkles className="w-10 h-10 text-blue-400 animate-bounce" />
          </div>
          <p className="text-blue-200 text-lg">Craft the perfect prompt with AI</p>
        </div>

        <PromptInput />
        
        <p className="text-center text-blue-200 text-lg flex items-center justify-center space-x-2">
          <span>Made with</span>
          <span className="text-red-400 animate-pulse text-xl">❤</span>
          <span>for better AI prompts</span>
        </p>
      </div>

      <div className="fixed bottom-4 left-0 right-0 text-center text-sm text-blue-200/80">
        <p className="space-x-1">
          <span>If you like this app, please</span>
          <a
            href="https://github.com/Pranav123415/PromptGen.AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            star the repo
          </a>
          <span>and</span>
          <a
            href="https://linkedin.com/in/pranav-kumar-b1a360245"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            follow me on LinkedIn
          </a>
          <span>!</span>
        </p>
      </div>
    </div>
  );
}

export default App;