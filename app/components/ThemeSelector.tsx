import type { Theme } from '../types';

interface ThemeSelectorProps {
  themes: Theme[];
  selectedTheme: Theme;
  onSelectTheme: (theme: Theme) => void;
}

export default function ThemeSelector({ themes, selectedTheme, onSelectTheme }: ThemeSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Design Themes</h2>
      <div className="space-y-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onSelectTheme(theme)}
            className={`w-full text-left p-4 rounded-xl transition-all transform hover:scale-105 ${
              selectedTheme.id === theme.id
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl scale-105'
                : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg text-white">{theme.name}</h3>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full text-white">
                {theme.category}
              </span>
            </div>
            <div className="flex gap-2 mt-3">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${theme.colors.primary}`}></div>
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${theme.colors.secondary}`}></div>
              <div className={`w-8 h-8 rounded ${theme.colors.background}`}></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
