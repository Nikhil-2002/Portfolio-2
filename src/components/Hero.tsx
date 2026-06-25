import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolio';

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = word.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === '') {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/40 via-fuchsia-500/20 to-cyan-400/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[420px] w-[420px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/20 blur-3xl animate-blob" />

      <div className="container-px grid w-full grid-cols-1 items-center gap-12 pt-24 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            className="chip mb-6"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/70"
          >
            Hello, world! I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display mt-2 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 flex items-center gap-2 text-xl sm:text-2xl"
          >
            <span className="text-white/70">I build</span>
            <span className="relative font-semibold text-white">
              {typed}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 bg-gradient-to-b from-violet-400 to-cyan-400"
              />
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Computer Science engineer crafting clean, performant, and delightful
            web experiences with React, TypeScript, and modern tooling.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail /> Contact me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex items-center gap-4 text-white/70"
          >
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2.5 transition hover:border-white/40 hover:text-white"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-2.5 transition hover:border-white/40 hover:text-white"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/10 p-2.5 transition hover:border-white/40 hover:text-white"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </motion.div>
        </div>

        {/* Right portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-2xl" />
          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-soft backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[22px]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-900/60 px-4 py-3 backdrop-blur-xl"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Currently
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {profile.role}
                  </p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Open to work
                </span>
              </motion.div>
            </div>
          </div>

          {/* Floating tech chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-6 top-10 chip backdrop-blur-xl"
          >
            ⚛︎ React + TS
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.4 }}
            className="absolute -right-4 top-1/3 chip backdrop-blur-xl"
          >
            🎨 Tailwind
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, delay: 0.8 }}
            className="absolute -right-2 bottom-16 chip backdrop-blur-xl"
          >
            ✨ Framer Motion
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition hover:text-white"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-xs uppercase tracking-widest"
        >
          Scroll
          <FiArrowDown size={18} />
        </motion.div>
      </a>
    </section>
  );
}
