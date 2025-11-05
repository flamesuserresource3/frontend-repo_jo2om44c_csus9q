import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, ChartBar, GraduationCap, Target, MessageCircle } from 'lucide-react';

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
    <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
    <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
  </div>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
    {children}
  </span>
);

const AIDashboard = ({ plan }) => {
  if (!plan) return null;

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">AI Result Dashboard</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">A calm overview of your Career, College, and Skill Growth paths.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Target className="h-5 w-5 text-cyan-500" />
              <h3 className="font-semibold">Career Plan</h3>
            </div>
            <Pill>Salary {plan.salaryRange}</Pill>
          </div>
          <p className="text-slate-700 dark:text-slate-300">Suggested Role</p>
          <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{plan.suggestedCareer}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {plan.tools.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Recommended Courses</p>
            <ul className="mt-2 list-inside list-disc text-sm text-slate-600 dark:text-slate-300">
              {plan.courses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <GraduationCap className="h-5 w-5 text-cyan-500" />
              <h3 className="font-semibold">College Plan</h3>
            </div>
            <Pill>Study Path</Pill>
          </div>
          <ul className="space-y-3">
            {plan.collegeSuggestions.map((s, idx) => (
              <li key={idx} className="rounded-xl border border-slate-200 bg-white/50 p-3 dark:border-slate-700 dark:bg-slate-900/40">
                <p className="font-medium text-slate-900 dark:text-white">Major: {s.major}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">If you study this, you might become: <span className="font-medium">{s.outcome}</span></p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <Calendar className="h-5 w-5 text-cyan-500" />
              <h3 className="font-semibold">Skill Growth Plan</h3>
            </div>
            <Pill>Learning Schedule</Pill>
          </div>
          <ol className="space-y-3">
            {plan.learningSchedule.map((item) => (
              <li key={item.label} className="rounded-xl border border-slate-200 bg-white/50 p-3 dark:border-slate-700 dark:bg-slate-900/40">
                <p className="font-medium text-slate-900 dark:text-white">{item.label}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.content}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard label="Profile Completion" value="56%" />
        <StatCard label="Weekly Focus Hours" value="8–12h" />
        <StatCard label="Recommended Projects" value="3" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <ChartBar className="h-5 w-5 text-cyan-500" />
            <h3 className="font-semibold">Roadmap Visualization</h3>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200/60 dark:bg-slate-800/80">
            <div className="h-full w-1/2 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Milestones unlocking as you progress.</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <BadgeCheck className="h-5 w-5 text-cyan-500" />
            <h3 className="font-semibold">Achievements</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {plan.achievements.map((a) => (
              <span key={a.id} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> {a.label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <MessageCircle className="h-5 w-5 text-cyan-500" />
            <h3 className="font-semibold">AI Chat Assistant</h3>
          </div>
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-xl bg-slate-100/80 p-3 dark:bg-slate-800/70">Hi {plan.user}, ask about switching to {plan.suggestedCareer} in 6 months.</div>
            <div className="ml-auto w-fit rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 text-white">What are the first 3 steps?</div>
            <div className="rounded-xl bg-slate-100/80 p-3 dark:bg-slate-800/70">Start with foundations, build 2 projects, and network weekly. I can generate a checklist for you.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDashboard;
