import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="mt-16 rounded-2xl border border-slate-200 bg-white/70 p-6 text-sm text-slate-600 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>© {new Date().getFullYear()} AI Career Planner — calm, elegant guidance for your journey.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
