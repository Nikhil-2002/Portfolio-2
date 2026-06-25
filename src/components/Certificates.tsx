import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { FiCalendar, FiExternalLink, FiX } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import SectionHeader from './SectionHeader';
import { certificates, type Certificate } from '../data/portfolio';

export default function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section">
      <div className="container-px">
        <SectionHeader
          eyebrow="Achievements"
          title="Certificates"
          subtitle="Courses, training, workshops, and internship certifications I have earned."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 140,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.6 },
              900: { slidesPerView: 2.2 },
              1200: { slidesPerView: 2.8 },
            }}
            className="!pb-14"
          >
            {certificates.map((c) => (
              <SwiperSlide key={c.title} className="!h-auto">
                <motion.button
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  onClick={() => setActive(c)}
                  className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-left shadow-soft backdrop-blur-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent" />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold backdrop-blur-xl">
                      <FiExternalLink /> View
                    </div>
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="line-clamp-1 text-lg font-bold">{c.title}</h3>
                    <div className="flex items-center justify-between text-xs text-white/65">
                      <span className="chip">{c.category}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <FiCalendar /> {c.date}
                      </span>
                    </div>
                  </div>
                </motion.button>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/50 p-2 text-white/90 transition hover:bg-black/80"
                aria-label="Close"
              >
                <FiX />
              </button>
              <img
                src={active.image}
                alt={active.title}
                className="h-auto w-full"
              />
              <div className="border-t border-white/10 p-5">
                <h3 className="text-lg font-bold sm:text-xl">{active.title}</h3>
                <p className="mt-1 text-sm text-white/65">
                  {active.category} • {active.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
