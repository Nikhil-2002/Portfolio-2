import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../data/portfolio';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= y) {
          setActive(links[i].href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-900/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between sm:h-20">
        <button
          onClick={() => handleClick('#home')}
          className="group flex items-center gap-2"
          aria-label="Home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-black text-white shadow-glow">
            N
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition group-hover:opacity-100" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-wider">
            {profile.brand}
          </span>
        </button>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-1.5 backdrop-blur-xl">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <button
                    onClick={() => handleClick(l.href)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/80 to-cyan-500/70 shadow-glow"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Resume
        </a>

        <button
          aria-label="Menu"
          className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white/90"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-ink-900/90 backdrop-blur-xl"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleClick(l.href)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                      active === l.href
                        ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-white'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block w-full btn-primary text-center"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
