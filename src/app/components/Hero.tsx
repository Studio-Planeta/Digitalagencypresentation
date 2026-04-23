import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

const heroImage = "https://images.unsplash.com/photo-1623491351874-328be6ece829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYWdlbmN5JTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc3Njk2OTAwNnww&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else navigate(`/${id}`);
  };

  return (
    <section className="relative min-h-screen bg-[#0C0C0E] overflow-hidden flex flex-col justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Studio Planeta"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0E]/60 via-[#0C0C0E]/40 to-[#0C0C0E]" />
      </div>

      {/* Warm glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span
                className="text-white/70 text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
              >
                Senior Engineers · 10+ Years Experience
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              We Build{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              Experiences
              <br />
              That Last.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/50 mb-10 max-w-lg"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              Studio Planeta is a collective of seasoned senior engineers delivering
              world-class web development — from pixel-perfect frontends to rock-solid
              backends and infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-xl hover:shadow-orange-500/30 transition-all active:scale-95"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}
              >
                Start a Project
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: '0.95rem' }}
              >
                See Our Work
              </button>
            </motion.div>
          </div>

          {/* Right — floating card stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {[
              { label: 'Projects Delivered', value: '200+', color: 'from-orange-500/20 to-amber-400/10', border: 'border-orange-500/20' },
              { label: 'Years of Experience', value: '10+', color: 'from-amber-400/15 to-orange-400/5', border: 'border-amber-400/20' },
              { label: 'Senior Engineers', value: '100%', color: 'from-white/8 to-white/3', border: 'border-white/10' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                className={`bg-gradient-to-r ${stat.color} border ${stat.border} rounded-2xl p-6 backdrop-blur-sm`}
              >
                <div
                  className="text-white/40 text-sm mb-1"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-white"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '2.8rem', lineHeight: 1.1 }}
                >
                  {stat.value}
                </div>
              </motion.div>
            ))}

            {/* Tech pill row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Next.js'].map((t) => (
                <span
                  key={t}
                  className="bg-white/5 border border-white/10 text-white/50 rounded-full px-3 py-1 text-xs"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection('#services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}