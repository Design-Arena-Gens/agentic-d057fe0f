'use client';

import { useState } from 'react';
import { Sparkles, Shuffle, Download, Eye } from 'lucide-react';
import ThemeSelector from './components/ThemeSelector';
import LandingPagePreview from './components/LandingPagePreview';
import { themes, generateRandomTheme } from './data/themes';
import type { Theme } from './types';

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const [previewMode, setPreviewMode] = useState(false);

  const handleRandomTheme = () => {
    const randomTheme = generateRandomTheme();
    setSelectedTheme(randomTheme);
  };

  const handleExport = () => {
    const html = document.getElementById('preview-container')?.innerHTML || '';
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${selectedTheme.name} - Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes slideUp {
      0% { transform: translateY(20px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-slide-up { animation: slideUp 0.5s ease-out; }
    .animate-fade-in { animation: fadeIn 0.8s ease-out; }
    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .glass-effect {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTheme.name.toLowerCase().replace(/\s+/g, '-')}-landing-page.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {!previewMode ? (
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-10 h-10 text-yellow-400 animate-float" />
              <h1 className="text-5xl font-bold text-white">
                Landing Page Generator
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create stunning landing pages with sophisticated design themes. Choose from curated designs or generate random variations.
            </p>
          </header>

          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            <button
              onClick={handleRandomTheme}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <Shuffle className="w-5 h-5" />
              Random Theme
            </button>
            <button
              onClick={() => setPreviewMode(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <Eye className="w-5 h-5" />
              Full Preview
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Export HTML
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ThemeSelector
                themes={themes}
                selectedTheme={selectedTheme}
                onSelectTheme={setSelectedTheme}
              />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">
                    {selectedTheme.name}
                  </span>
                </div>
                <div className="overflow-auto" style={{ maxHeight: '70vh' }}>
                  <LandingPagePreview theme={selectedTheme} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setPreviewMode(false)}
            className="fixed top-4 right-4 z-50 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            Exit Preview
          </button>
          <LandingPagePreview theme={selectedTheme} />
        </div>
      )}
    </main>
  );
}
