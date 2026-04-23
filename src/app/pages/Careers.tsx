import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Users, Zap, Globe2, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router';

const perks = [
  { icon: Globe2, title: 'Remote-first', desc: 'Work from anywhere in the world. We judge output, not hours or time zones.' },
  { icon: Zap, title: 'Interesting problems', desc: 'No CRUD apps. We work on complex, meaningful products at real scale.' },
  { icon: Users, title: 'Senior-only team', desc: 'Collaborate with engineers who have done this for a decade. Grow faster.' },
  { icon: Coffee, title: 'No corporate BS', desc: 'Flat structure, direct communication, and full autonomy on how you work.' },
];

const openings = [
  {
    title: 'Senior Frontend Engineer',
    type: 'Full-time · Remote',
    experience: '8+ years',
    tags: ['React', 'TypeScript', 'Performance', 'Animations'],
    description: 'We need a frontend engineer who cares deeply about craft. You\'re the type who loses sleep over bundle sizes, writes animations that feel alive, and has opinions about component APIs. You\'ve shipped complex React applications at scale and you can prove it.',
    requirements: [
      '8+ years of frontend engineering experience',
      'Expert-level React and TypeScript',
      'Strong understanding of web performance and Core Web Vitals',
      'Experience building design systems and component libraries',
      'Ability to work independently with minimal guidance',
      'A portfolio of work you\'re genuinely proud of',
    ],
    nice: ['Experience with Motion/Framer Motion', 'Contributions to open source', 'Accessibility expertise'],
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Senior Backend Engineer',
    type: 'Full-time · Remote',
    experience: '8+ years',
    tags: ['Node.js', 'Python', 'Microservices', 'Databases'],
    description: 'A backend engineer who has architected and maintained production systems handling serious traffic. You think in terms of reliability, observability, and maintainability — not just features. You\'ve debugged production incidents at 2am and learned from every one of them.',
    requirements: [
      '8+ years of backend engineering experience',
      'Expert-level Node.js or Python (Go is a strong plus)',
      'Deep understanding of distributed systems and API design',
      'Production experience with PostgreSQL, Redis, and/or MongoDB',
      'Experience with microservices and event-driven architectures',
      'Strong opinions on API security, rate limiting, and authentication',
    ],
    nice: ['Go or Rust experience', 'Experience with Kafka or similar', 'Open source contributions'],
    gradient: 'from-amber-400 to-orange-300',
  },
  {
    title: 'Senior DevOps / Platform Engineer',
    type: 'Full-time · Remote',
    experience: '8+ years',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    description: 'Infrastructure as code is your native language. You\'ve built platforms that developers love to use and systems that stay up when it matters most. You understand that great DevOps is invisible — until something goes wrong, and then you\'ve already fixed it.',
    requirements: [
      '8+ years of DevOps/infrastructure experience',
      'Expert-level AWS (GCP or Azure as alternative)',
      'Deep Kubernetes experience in production environments',
      'Terraform or Pulumi for infrastructure as code',
      'Hands-on CI/CD experience (GitHub Actions, ArgoCD, etc.)',
      'Strong security mindset and compliance experience',
    ],
    nice: ['Platform engineering / Internal developer platforms', 'FinOps experience', 'SOC2 compliance'],
    gradient: 'from-orange-400 to-amber-500',
  },
];

export function Careers() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9F6EF] min-h-screen">

      {/* Hero */}
      <section className="bg-[#0C0C0E] pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-400/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span
              className="text-orange-400 text-sm tracking-widest uppercase block mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Careers
            </span>
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              Work with people
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                as good as you.
              </span>
            </h1>
            <p
              className="text-white/40 max-w-lg"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.8 }}
            >
              We only hire senior engineers. Not because we think juniors can't be great — but because our clients deserve deep expertise on every task, and our team deserves colleagues who make them better.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Remote', 'Senior-only', 'No meetings culture', 'Real autonomy'].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/5 border border-white/10 text-white/50 rounded-full px-4 py-1.5 text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span
              className="text-orange-500 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Why Join Us
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
              What makes us different.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-black/5 hover:shadow-lg hover:shadow-orange-500/5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                  <perk.icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3
                  className="text-[#0C0C0E] mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}
                >
                  {perk.title}
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.75 }}
                >
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-[#0C0C0E] py-24 px-6">
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
              Open Positions
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
              {openings.length} senior roles open now.
            </h2>
          </motion.div>

          <div className="space-y-5">
            {openings.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-3xl p-8 md:p-10 hover:border-orange-500/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span
                      className="text-white"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3
                          className="text-white mb-1"
                          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.3rem' }}
                        >
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>{role.type}</span>
                          <span className="text-orange-400/70" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>
                            {role.experience} required
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {role.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-white/5 border border-white/10 text-white/50 rounded-full px-3 py-1 text-xs"
                          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-white/40"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.9rem', lineHeight: 1.75 }}
                    >
                      {role.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div
                      className="text-white/25 text-xs uppercase tracking-widest mb-4"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                    >
                      Requirements
                    </div>
                    <ul className="space-y-2.5">
                      {role.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-400/50 flex-shrink-0 mt-0.5" />
                          <span
                            className="text-white/40 text-sm"
                            style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}
                          >
                            {r}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div
                      className="text-white/25 text-xs uppercase tracking-widest mb-4"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                    >
                      Nice to Have
                    </div>
                    <ul className="space-y-2.5">
                      {role.nice.map((n) => (
                        <li key={n} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400/40" />
                          </div>
                          <span
                            className="text-white/30 text-sm"
                            style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}
                          >
                            {n}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/6">
                  <button
                    onClick={() => navigate('/#contact')}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                  >
                    Apply for this role
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative applications */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-black/5 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h2
              className="text-[#0C0C0E] mb-4"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Don't see the right role?
            </h2>
            <p
              className="text-[#6B6B6B] mb-8 max-w-md mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}
            >
              If you're a senior engineer who shares our values, we want to hear from you regardless. We occasionally open roles for exceptional people.
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Send a speculative application
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
