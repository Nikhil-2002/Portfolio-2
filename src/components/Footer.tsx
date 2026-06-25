import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white">{profile.name}</span> —
          Crafted with React, Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <FiInstagram size={16} />
          </a>
          <a
            href={profile.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <FiFacebook size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
