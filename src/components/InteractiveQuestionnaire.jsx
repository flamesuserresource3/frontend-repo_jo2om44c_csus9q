import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, BookOpen, Wrench, Sparkles } from 'lucide-react';

const chips = (arr, selected, toggle) => (
  <div className="mt-3 flex flex-wrap gap-2">
    {arr.map((item) => (
      <button
        key={item}
        type="button"
        onClick={() => toggle(item)}
        className={`rounded-full border px-3 py-1 text-sm transition ${
          selected.includes(item)
            ? 'border-cyan-500 bg-cyan-50 text-cyan-700 dark:border-cyan-400 dark:bg-cyan-400/10 dark:text-cyan-300'
            : 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
        }`}
      >
        {item}
      </button>
    ))}
  </div>
);

const InteractiveQuestionnaire = ({ onGenerate }) => {
  const [name, setName] = useState('');
  const [interests, setInterests] = useState([]);
  const [skills, setSkills] = useState([]);
  const [personality, setPersonality] = useState('');
  const [loading, setLoading] = useState(false);

  const interestOptions = useMemo(
    () => ['AI/ML', 'Design', 'Business', 'Healthcare', 'Cybersecurity', 'Education', 'Finance', 'Gaming'],
    []
  );
  const skillOptions = useMemo(
    () => ['Python', 'JavaScript', 'Data Analysis', 'Writing', 'Public Speaking', 'UI/UX', 'Project Management', 'Math'],
    []
  );
  const personalityOptions = ['Analytical', 'Creative', 'Social', 'Detail-oriented', 'Visionary'];

  const toggleItem = (list, setList) => (item) => {
    setList((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Lightweight, on-device "AI" synthesis to create a cohesive plan mock
    setTimeout(() => {
      const focus = interests[0] || 'AI/ML';
      const primarySkill = skills[0] || 'Problem Solving';
      const trait = personality || 'Analytical';

      const careerTitleMap = {
        'AI/ML': 'Machine Learning Engineer',
        Design: 'Product Designer',
        Business: 'Business Analyst',
        Healthcare: 'Health Data Scientist',
        Cybersecurity: 'Security Analyst',
        Education: 'EdTech Specialist',
        Finance: 'Quantitative Analyst',
        Gaming: 'Game Systems Designer',
      };

      const career = careerTitleMap[focus] || 'Career Strategist';

      const plan = {
        user: name || 'Explorer',
        suggestedCareer: career,
        strengths: [primarySkill, trait],
        salaryRange: focus === 'AI/ML' || focus === 'Finance' ? '$90k–$160k' : '$60k–$120k',
        tools: focus === 'Design' ? ['Figma', 'Framer', 'Notion'] : ['Python', 'Git', 'VS Code'],
        courses: focus === 'AI/ML'
          ? ['Andrew Ng ML', 'fast.ai Practical Deep Learning', 'Hands-On ML (Aurélien Géron)']
          : focus === 'Design'
          ? ['Design of Everyday Things', 'Figma Basics', 'Refactoring UI']
          : ['Coursera Specialization', 'Udemy Bootcamp', 'LinkedIn Learning Path'],
        learningSchedule: [
          { label: 'Weeks 1–2', content: `Foundations in ${focus}` },
          { label: 'Weeks 3–5', content: `Projects using ${primarySkill}` },
          { label: 'Weeks 6–8', content: 'Portfolio + mock interviews' },
        ],
        collegeSuggestions: [
          { major: focus === 'Design' ? 'Human-Computer Interaction' : 'Computer Science', outcome: career },
          { major: focus === 'Business' ? 'Information Systems' : 'Data Science', outcome: 'Product-Focused Role' },
        ],
        achievements: [
          { id: 'profile', label: 'Completed Profile' },
          { id: 'first-project', label: 'Shipped First Project' },
          { id: 'portfolio', label: 'Published Portfolio' },
        ],
      };

      onGenerate(plan);
      setLoading(false);
    }, 800);
  };

  const ready = interests.length > 0 && skills.length > 0 && personality;

  return (
    <section className="relative mt-12 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
      <div className="absolute -inset-x-6 -top-6 h-24 rounded-t-3xl bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
            <Sparkles />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Interactive Questionnaire</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">Tell us about yourself to craft your Career, College, and Skill Growth plans.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <User className="h-4 w-4" /> Name (optional)
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Alex"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none ring-cyan-500/0 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <BookOpen className="h-4 w-4" /> Interests
            </label>
            {chips(interestOptions, interests, toggleItem(interests, setInterests))}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <Wrench className="h-4 w-4" /> Skills
            </label>
            {chips(skillOptions, skills, toggleItem(skills, setSkills))}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">Personality</label>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {personalityOptions.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPersonality(p)}
                  className={`rounded-xl border px-3 py-2 text-sm transition ${
                    personality === p
                      ? 'border-cyan-500 bg-cyan-50 text-cyan-700 dark:border-cyan-400 dark:bg-cyan-400/10 dark:text-cyan-300'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              disabled={!ready || loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Generating your AI plans...
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-5 w-5" /> Generate My Plans
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InteractiveQuestionnaire;
