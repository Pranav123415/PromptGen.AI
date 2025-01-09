import { Sparkles, BookOpen, History } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Start Refining",
      description: "Transform your ideas into perfect prompts",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Explore Examples",
      description: "Learn from curated prompt examples",
      gradient: "from-purple-600 to-purple-400"
    },
    {
      icon: <History className="w-5 h-5" />,
      title: "Recent Prompts",
      description: "Access your prompt history",
      gradient: "from-indigo-600 to-indigo-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {actions.map((action, index) => (
        <button
          key={index}
          className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6 hover:bg-gray-800/70 transition-all transform hover:scale-[1.02]"
        >
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.gradient} flex items-center justify-center mb-4`}>
            {action.icon}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
          <p className="text-gray-400 text-sm">{action.description}</p>
        </button>
      ))}
    </div>
  );
}