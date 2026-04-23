import { motion } from 'motion/react';
import {
  Code2, Zap, Smartphone, Palette, Shield, BarChart2,
  CheckCircle2, ArrowUpRight, ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router';

const codeImg = 'https://images.unsplash.com/photo-1555680510-34daedadbdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900';
const ecommerceImg = 'https://images.unsplash.com/photo-1646193186138-148d07f84b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900';

const deliverables = [
  {
    icon: Palette,
    title: 'Pixel-Perfect UI Implementation',
    desc: 'We translate designs into production-ready components with obsessive fidelity — spacing, typography, shadows, and transitions all exactly as designed.',
  },
  {
    icon: Zap,
    title: 'Performance Engineering',
    desc: 'Core Web Vitals as a first-class concern. Lazy loading, code splitting, image optimization, and bundle analysis built into our workflow.',
  },
  {
    icon: Smartphone,
    title: 'Responsive & Adaptive Layouts',
    desc: 'From 320px to 4K. We design and build for every screen, every device, every operating context — including touch and keyboard.',
  },
  {
    icon: Code2,
    title: 'Design Systems & Component Libraries',
    desc: 'Scalable, documented, typed component libraries that make your entire team faster. Built in Storybook, tested, and ready to grow with you.',
  },
  {
    icon: Shield,
    title: 'Accessibility (WCAG AA)',
    desc: 'Accessibility isn\'t an afterthought — it\'s woven into every component from the start. Proper ARIA, keyboard navigation, and screen reader support.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Monitoring Integration',
    desc: 'Structured event tracking, error boundary integration, and real-user monitoring so you always know how your product is performing.',
  },
];

const techStack = [
  { category: 'Frameworks', items: ['React 18', 'Next.js 14', 'Vue 3', 'Nuxt', 'Astro'] },
  { category: 'Languages', items: ['TypeScript', 'JavaScript ES2024'] },
  { category: 'Styling', items: ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Vanilla Extract'] },
  { category: 'Animation', items: ['Motion (Framer)', 'GSAP', 'React Spring', 'CSS Transitions'] },
  { category: 'Testing', items: ['Vitest', 'Testing Library', 'Playwright', 'Storybook'] },
  { category: 'Tooling', items: ['Vite', 'Webpack 5', 'Turbopack', 'ESLint', 'Prettier'] },
];

const metrics = [
  { value: '<1.5s', label: 'LCP target', desc: 'Largest Contentful Paint' },
  { value: '<100ms', label: 'INP target', desc: 'Interaction to Next Paint' },
  { value: '0', label: 'CLS target', desc: 'Cumulative Layout Shift' },
  { value: '95+', label: 'Lighthouse score', desc: 'Performance · Accessibility · SEO' },
];

const process = [
  { step: '01', title: 'Component audit & planning', desc: 'We map every UI component before writing a line of code.' },
  { step: '02', title: 'Design system setup', desc: 'Tokens, typography, colour, spacing — the foundation first.' },
  { step: '03', title: 'Component development', desc: 'Built, typed, tested, documented. In that order.' },
  { step: '04', title: 'Integration & performance', desc: 'Pages assembled, performance benchmarked, issues resolved.' },
  { step: '05', title: 'QA & cross-browser', desc: 'Every major browser, every screen size, every interaction state.' },
];

const relatedServices = [
  { title: 'Web Design', desc: 'Visual design, UX strategy, and design systems.' },
  { title: 'Backend Development', desc: 'APIs, microservices, and server-side logic.' },
  { title: 'Tech Consulting', desc: 'Architecture reviews and stack guidance.' },
];

export function FrontendService() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0C0C0E] min-h-screen">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-white/30 text-sm mb-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <button onClick={() => navigate('/')} className="hover:text-white/60 transition-colors">Home</button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => navigate('/#services')} className="hover:text-white/60 transition-colors">Services</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-400">Frontend Engineering</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <Code2 className="w-4 h-4 text-orange-400" />
                <span
                  className="text-orange-300 text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  Frontend Engineering
                </span>
              </div>

              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                }}
              >
                Interfaces built
                <br />
                to{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  perform
                </span>
                {' '}and
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  delight.
                </span>
              </h1>

              <p
                className="text-white/45 mb-10 max-w-lg"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.8 }}
              >
                We build frontend applications that are fast, accessible, and genuinely beautiful — because we believe users deserve all three, not just one or two.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/#contact')}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-xl hover:shadow-orange-500/30 transition-all active:scale-95"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  Start a Frontend Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="px-7 py-3.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  See Our Work
                </button>
              </div>
            </motion.div>

            {/* Right: code image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img src={codeImg} alt="Frontend code" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0C0C0E]/70 to-transparent" />
                {/* Floating metric cards */}
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {[{ v: '98', l: 'Perf.' }, { v: '100', l: 'A11y' }, { v: '100', l: 'SEO' }].map((m) => (
                    <div
                      key={m.l}
                      className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-center"
                    >
                      <div
                        className="text-white"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.4rem', lineHeight: 1 }}
                      >
                        {m.v}
                      </div>
                      <div className="text-white/50 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {m.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance metrics */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-400 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="text-center"
            >
              <div
                className="text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}
              >
                {m.value}
              </div>
              <div className="text-white/80 text-sm mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                {m.label}
              </div>
              <div className="text-white/55 text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                {m.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-[#F9F6EF] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span
              className="text-orange-500 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              What You Get
            </span>
            <h2
              className="text-[#0C0C0E]"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              Every engagement includes.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d, idx) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-black/5 hover:shadow-lg hover:shadow-orange-500/5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                  <d.icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3
                  className="text-[#0C0C0E] mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.75 }}
                >
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="text-orange-400 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Technology
            </span>
            <h2
              className="text-white"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              Our frontend toolkit.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="bg-white/4 border border-white/8 rounded-2xl p-5"
              >
                <div
                  className="text-white/30 text-xs uppercase tracking-wide mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  {cat.category}
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-white/55 text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-[#F9F6EF] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="text-orange-500 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              How We Do It
            </span>
            <h2
              className="text-[#0C0C0E]"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              Our frontend build process.
            </h2>
          </motion.div>

          <div className="space-y-4">
            {process.map((p, idx) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-black/5 flex items-start gap-6"
              >
                <span
                  className="text-orange-400/30"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}
                >
                  {p.step}
                </span>
                <div>
                  <h3
                    className="text-[#0C0C0E] mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[#6B6B6B] text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="bg-[#0C0C0E] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span
              className="text-orange-400 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Featured Work
            </span>
            <h2
              className="text-white"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              See it in action.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => navigate('/portfolio')}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
            style={{ minHeight: '400px' }}
          >
            <img src={ecommerceImg} alt="Merino project" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/90 to-[#0C0C0E]/20" />
            <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center p-12">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Web Design', 'Frontend', 'Backend'].map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/15 text-white/60 rounded-full px-3 py-1 text-xs backdrop-blur-sm"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}
                >
                  Merino E-Commerce Platform
                </h3>
                <p
                  className="text-white/50 max-w-md"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.7 }}
                >
                  Sub-200ms load times, 98 Lighthouse performance score, and a design system covering 80+ components.
                </p>
                <div className="flex items-center gap-2 mt-6 text-orange-400 group-hover:gap-3 transition-all">
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}>
                    View Case Study
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-[#F9F6EF] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span
              className="text-orange-500 text-sm tracking-widest uppercase block mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Related Services
            </span>
            <h2
              className="text-[#0C0C0E]"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Pair with frontend for best results.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedServices.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-black/5 group hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all cursor-pointer"
                onClick={() => navigate('/#services')}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-[#0C0C0E]"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}
                  >
                    {s.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#CCC] group-hover:text-orange-400 transition-colors" />
                </div>
                <p
                  className="text-[#6B6B6B] text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0C0E] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Ready to build something
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                extraordinary?
              </span>
            </h2>
            <p
              className="text-white/40 mb-10 max-w-md mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}
            >
              Tell us about your frontend project and we'll come back with a clear proposal within 48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact')}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-xl hover:shadow-orange-500/30 transition-all"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1rem' }}
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/process')}
                className="px-10 py-4 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
              >
                See Our Process
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
