import React from 'react';
import { PromptInput } from './components/PromptInput';
import { Sparkles, Stars, Github, Linkedin } from 'lucide-react';

function FloatingPrompts() {
  const prompts = [
    { 
      text: "ML for Beginners",
      subtext: "Linear Regression Step by Step",
      color: "from-cyan-400/80 to-cyan-600/80",
      position: { x: 10, y: 15 }
    },
    { 
      text: "AI Roadmap 2024",
      subtext: "From Basics to Advanced",
      color: "from-teal-400/80 to-teal-600/80",
      position: { x: 70, y: 20 }
    },
    { 
      text: "Portfolio Projects",
      subtext: "ChatGPT Clone, ML Models",
      color: "from-emerald-400/80 to-emerald-600/80",
      position: { x: 15, y: 65 }
    },
    { 
      text: "System Design",
      subtext: "Real-world Architecture",
      color: "from-cyan-400/80 to-emerald-500/80",
      position: { x: 65, y: 70 }
    },
    { 
      text: "Resume Tips",
      subtext: "AI/ML Project Highlights",
      color: "from-teal-400/80 to-cyan-500/80",
      position: { x: 20, y: 40 }
    },
    { 
      text: "Interview Prep",
      subtext: "AI Concepts & Practice",
      color: "from-emerald-400/80 to-teal-500/80",
      position: { x: 75, y: 45 }
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {prompts.map((prompt, i) => (
        <div
          key={i}
          className={`absolute bg-gradient-to-r ${prompt.color} p-6 rounded-2xl 
            backdrop-blur-sm bg-gray-950/30
            font-mono text-lg opacity-60 hover:opacity-95 transform hover:scale-105
            animate-float-random select-none transition-all duration-300
            hover:z-50 shadow-lg hover:shadow-xl border border-white/10
            min-w-[280px] max-w-[320px]`}
          style={{
            left: `${prompt.position.x}%`,
            top: `${prompt.position.y}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          <div className="text-white font-bold text-xl">
            {prompt.text}
          </div>
          <div className="text-white/80 mt-2">
            {prompt.subtext}
          </div>
        </div>
      ))}
    </div>
  );
}

function InteractiveBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#050816] to-gray-950" />
      
      {/* Code rain effect */}
      <div className="absolute inset-0 opacity-[0.25]">
        {[...Array(15)].map((_, i) => (
          <div
            key={`code-${i}`}
            className="absolute top-0 text-cyan-400/70 whitespace-nowrap font-mono text-base font-bold animate-code-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {[...Array(10)].map((_, j) => (
              <div key={j} className="my-1">
                {Math.random().toString(36).substring(2, 7)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.07]" />
      
      {/* Ambient glow spots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`glow-${i}`}
          className="absolute rounded-full animate-pulse-slow mix-blend-soft-light"
          style={{
            width: `${Math.random() * 400 + 300}px`,
            height: `${Math.random() * 400 + 300}px`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? 'rgba(34, 211, 238, 0.12)' : 'rgba(16, 185, 129, 0.12)'
            } 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${8 + Math.random() * 6}s`
          }}
        />
      ))}

      {/* Floating tech symbols */}
      {['}', '{', '/>', '()', '[]', '&&', '=>', ';;'].map((symbol, i) => (
        <div
          key={`symbol-${i}`}
          className="absolute text-cyan-400/40 font-mono text-3xl font-bold animate-float-symbol select-none"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}
        >
          {symbol}
        </div>
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]">
        {[...Array(10)].map((_, i) => (
          <line
            key={`line-${i}`}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-cyan-400 animate-line-draw"
            style={{ 
              animationDelay: `${Math.random() * 5}s`,
              strokeDasharray: '1000',
              strokeDashoffset: '1000'
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <InteractiveBackground />

      {/* Social Links */}
      <div className="fixed top-6 right-6 flex space-x-4">
        <SocialLink href="https://github.com/Pranav123415" icon={<Github />} />
        <SocialLink href="https://linkedin.com/in/pranav-kumar-b1a360245" icon={<Linkedin />} />
      </div>

      <main className="w-full max-w-4xl space-y-12 relative z-10">
        {/* Title */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Stars className="w-12 h-12 text-cyan-500/70 animate-spin-slow" />
            <h1 className="text-6xl font-bold font-display bg-gradient-to-r from-cyan-400/90 via-teal-400/90 to-emerald-400/90 bg-clip-text text-transparent">
              PromptGen.AI
            </h1>
            <Sparkles className="w-12 h-12 text-emerald-500/70 animate-bounce" />
          </div>
          <p className="text-cyan-300/80 text-xl font-light tracking-wide">
            Craft the perfect prompt with AI
          </p>
        </div>

        <PromptInput />
        <Footer />
      </main>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-900/30 hover:bg-gray-800/30 transition-all transform hover:scale-110 hover:rotate-6 border border-gray-800/50 group"
    >
      <div className="w-6 h-6 text-gray-400 group-hover:text-cyan-400/90 transition-colors">
        {icon}
      </div>
    </a>
  );
}

function Footer() {
  return (
    <div className="text-center space-y-4">
      <p className="text-gray-400 text-lg flex items-center justify-center space-x-2">
        <span>Made with</span>
        <span className="text-red-400 animate-pulse text-xl">❤</span>
        <span>for better AI prompts</span>
      </p>
      <p className="text-sm text-gray-500">
        <span>If you're loving this app, ⭐ the </span>
        <a
          href="https://github.com/Pranav123415/PromptGen.AI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 hover:text-cyan-400 transition-colors underline"
        >
        repo
        </a>
        <span> and connect on </span>
        <a
          href="https://linkedin.com/in/pranav-kumar-b1a360245"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 hover:text-cyan-400 transition-colors underline"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default App;