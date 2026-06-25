import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { profile } from '../data/portfolio';

const stats = [
  { label: 'Years coding', value: '5+' },
  { label: 'Projects shipped', value: '20+' },
  { label: 'Certifications', value: '9' },
  { label: 'Internships', value: '3' },
];

const info = [
  { icon: <FiUser />, label: 'Name', value: profile.name },
  { icon: <FiMapPin />, label: 'Location', value: profile.location },
  { icon: <FiMail />, label: 'Email', value: profile.email },
  { icon: <FiPhone />, label: 'Phone', value: profile.phone },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-px">
        <SectionHeader
          eyebrow="Who I am"
          title="About Me"
          subtitle="A short intro to my background, what I work on, and how I think about building products."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr,1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="card relative overflow-hidden p-6 sm:p-8"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative flex items-center gap-5">
              <div className="relative">
                <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-violet-500/40 to-cyan-400/40 blur-md" />
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-24 w-24 rounded-2xl border border-white/10 object-cover sm:h-28 sm:w-28"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">{profile.name}</h3>
                <p className="mt-1 text-sm text-white/70">{profile.role}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip">React</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">Node.js</span>
                </div>
              </div>
            </div>

            <ul className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {info.map((it) => (
                <li
                  key={it.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-white">
                    {it.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-widest text-white/50">
                      {it.label}
                    </p>
                    <p className="truncate text-sm font-semibold">{it.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                >
                  <p className="font-display text-2xl font-extrabold gradient-text">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-white/55">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="card p-6 sm:p-8"
          >
            <h3 className="font-display text-2xl font-bold">My story</h3>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/75">
              {profile.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary text-sm">
                Let&apos;s talk
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-sm"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
