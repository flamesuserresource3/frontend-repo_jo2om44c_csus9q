import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import HeroSection from './components/HeroSection';
import InteractiveQuestionnaire from './components/InteractiveQuestionnaire';
import AIDashboard from './components/AIDashboard';
import SiteFooter from './components/SiteFooter';

const App = () => {
  const [plan, setPlan] = useState(null);
  const [theme, setTheme] = useState('light');
  const formRef = useRef(null);

  useEffect(() => {
    // Respect system preference on first load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('ai-planner-theme');
    const t = saved || (prefersDark ? 'dark' : 'light');
    setTheme(t);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('ai-planner-theme', theme);
  }, [theme]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
      {/* Top bar with theme toggle */}
      <div className="sticky top-0 z-20 mx-auto mb-6 flex w-full max-w-6xl items-center justify-end px-6 pt-4">
        <button
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-sm backdrop-blur-md transition hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-900/60"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-cyan-500" />}
          <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
        </button>
      </div>

      <main className="mx-auto max-w-6xl px-6">
        <HeroSection onStart={scrollToForm} />

        <div ref={formRef}>
          <InteractiveQuestionnaire onGenerate={setPlan} />
        </div>

        <AIDashboard plan={plan} />

        <SiteFooter />
      </main>
    </div>
  );
};

export default App;
