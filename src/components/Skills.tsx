import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-violet-600/10 blur-3xl" />
      <div className="container-px">
        <SectionHeader
          eyebrow="What I work with"
          title="Skills & Tech Stack"
          subtitle="A mix of languages, frameworks, and tools I use day-to-day."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card group relative overflow-hidden p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold tracking-wide text-white/90">
                  {s.name}
                </p>
                <span className="text-xs font-bold text-white/60">
                  {s.level}%
                </span>
              </div>
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                  className={`relative h-full rounded-full bg-gradient-to-r ${s.color}`}
                >
                  <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] bg-[length:200%_100%] animate-shimmer" />
                </motion.div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
