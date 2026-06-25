import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiExternalLink,
  FiGithub,
  FiMaximize2,
  FiRefreshCw,
  FiStar,
  FiX,
} from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { projects, type Project } from '../data/portfolio';

function ProjectPreview({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [key, setKey] = useState(0);

  // No live demo → static image fallback.
  if (!project.demo) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
      {/* Static image as a low-cost placeholder while iframe loads / if it fails */}
      {(!loaded || failed) && (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {!failed && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 origin-top-left"
          style={{
            // Render the iframe at 1280×800 then scale it down to fit the card.
            // We use CSS transforms so the embedded site sees a real desktop viewport.
            width: '1280px',
            height: '800px',
            transform: 'scale(0.32)',
            transformOrigin: 'top left',
          }}
        >
          <iframe
            key={key}
            src={project.demo}
            title={project.title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className="h-full w-full border-0 bg-white"
          />
        </div>
      )}

      {/* Click overlay — opens fullscreen via parent state, also lets us shadow the iframe */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/20 to-transparent" />

      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-xl">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Live preview
      </span>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setFailed(false);
          setLoaded(false);
          setKey((k) => k + 1);
        }}
        className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/85 backdrop-blur-xl transition hover:text-white"
        aria-label="Reload preview"
      >
        <FiRefreshCw size={12} /> Reload
      </button>
    </div>
  );
}

function FullscreenModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 16 }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-soft"
      >
        <div className="flex items-center gap-3 border-b border-white/10 bg-ink-900/70 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <p className="ml-2 flex-1 truncate text-sm font-semibold">
            {project.title}
          </p>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85 transition hover:border-white/40 hover:text-white"
            >
              <FiExternalLink size={14} /> Open in new tab
            </a>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10"
          >
            <FiX />
          </button>
        </div>

        <div className="relative flex-1 bg-white">
          {project.demo ? (
            <iframe
              src={project.demo}
              title={project.title}
              className="h-full w-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-ink-900 text-white/70">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="container-px">
        <SectionHeader
          eyebrow="My work"
          title="Featured Projects"
          subtitle="Live, interactive previews of my hosted projects — click any card to open it full-screen."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              onClick={() => setActive(p)}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-soft backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-violet-500/30 blur-3xl" />
                <div className="absolute -right-12 -bottom-12 h-44 w-44 rounded-full bg-cyan-500/30 blur-3xl" />
              </div>

              <ProjectPreview project={p} />

              {p.featured && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-xl">
                  <FiStar size={12} /> Featured
                </span>
              )}

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold leading-tight">{p.title}</h3>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition group-hover:border-white/40 group-hover:text-white">
                    <FiMaximize2 size={14} />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/65">
                  {p.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-3">
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-xs font-semibold text-white shadow-glow"
                    >
                      <FiExternalLink size={14} /> Open live
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/50">
                      Desktop app
                    </span>
                  )}
                  {p.source && (
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 transition hover:border-white/40 hover:text-white"
                    >
                      <FiGithub size={14} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="https://github.com/Nikhil-2002"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 backdrop-blur-xl transition hover:border-white/40 hover:text-white"
          >
            <FiGithub size={16} />
            See more projects
          </a>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <FullscreenModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
