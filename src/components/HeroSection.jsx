import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const HeroSection = ({ onStart }) => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
          AI Career Planner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 bg-clip-text text-4xl font-semibold text-transparent dark:from-white dark:via-slate-100 dark:to-slate-300 sm:text-5xl md:text-6xl"
        >
          Design your future with calm, intelligent guidance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg"
        >
          An elegant, minimal workspace to map your Career, College, and Skill Growth paths — powered by AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-10"
        >
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Start Your AI Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
