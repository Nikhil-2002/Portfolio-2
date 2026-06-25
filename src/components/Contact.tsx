import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Snackbar, Alert } from '@mui/material';
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { profile } from '../data/portfolio';

const mui = {
  '& label': { color: 'rgba(255,255,255,0.6)' },
  '& label.Mui-focused': { color: '#a78bfa' },
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.04)',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.25)' },
    '&.Mui-focused fieldset': { borderColor: '#a78bfa' },
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open the user's mail client as a graceful fallback.
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || 'Hello from your portfolio',
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )}`;
    window.location.href = mailto;
    setSent(true);
    setOpen(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade" />
      <div className="container-px">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's work together"
          subtitle="Have a project in mind, an opportunity, or just want to say hi? Drop me a message."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr,1fr]">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="card space-y-4 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField
                fullWidth
                required
                name="name"
                label="Your name"
                value={form.name}
                onChange={onChange}
                sx={mui}
              />
              <TextField
                fullWidth
                required
                type="email"
                name="email"
                label="Your email"
                value={form.email}
                onChange={onChange}
                sx={mui}
              />
            </div>
            <TextField
              fullWidth
              required
              name="subject"
              label="Subject"
              value={form.subject}
              onChange={onChange}
              sx={mui}
            />
            <TextField
              fullWidth
              required
              multiline
              minRows={5}
              name="message"
              label="Message"
              value={form.message}
              onChange={onChange}
              sx={mui}
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-white/55">
                I usually respond within a day.
              </p>
              <button type="submit" className="btn-primary">
                <FiSend /> Send message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card relative overflow-hidden p-6 sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <h3 className="font-display text-2xl font-bold">Contact info</h3>
            <p className="mt-2 text-sm text-white/65">
              Reach out through any of the channels below.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30">
                  <FiMapPin />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/50">
                    Location
                  </p>
                  <p className="text-sm font-semibold">{profile.location}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30">
                  <FiPhone />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/50">
                    Phone
                  </p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-sm font-semibold hover:text-white"
                  >
                    {profile.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30">
                  <FiMail />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/50">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold hover:text-white"
                  >
                    {profile.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest text-white/50">
                Follow me
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {[
                  { href: profile.socials.github, icon: <FiGithub />, label: 'GitHub' },
                  { href: profile.socials.linkedin, icon: <FiLinkedin />, label: 'LinkedIn' },
                  { href: profile.socials.instagram, icon: <FiInstagram />, label: 'Instagram' },
                  { href: profile.socials.facebook, icon: <FiFacebook />, label: 'Facebook' },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    whileHover={{ y: -3 }}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/85 transition hover:border-white/40 hover:text-white"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={sent ? 'success' : 'info'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          Opening your email client — thanks for reaching out!
        </Alert>
      </Snackbar>
    </section>
  );
}
