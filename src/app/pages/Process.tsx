import { motion } from 'motion/react';
import { MessageSquare, Map, Code2, Rocket, HeartHandshake, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery & Alignment',
    tagline: 'We listen before we talk.',
    description: 'Every great project starts with deep listening. In our discovery call, we don\'t pitch solutions — we ask questions. We want to understand your business goals, your users, your constraints, and what "success" actually means for this project.',
    deliverables: ['Goals & constraints document', 'Stakeholder alignment', 'Technical feasibility assessment', 'Initial risk identification'],
    duration: '1–2 days',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategy & Architecture',
    tagline: 'The blueprint for everything.',
    description: 'Once we understand the problem, we map the solution. This phase is where experience pays off — choosing the right stack, defining the architecture, breaking down milestones, and writing a proposal with zero ambiguity. No surprises later.',
    deliverables: ['Technical architecture document', 'Stack recommendation with rationale', 'Project roadmap & milestones', 'Transparent fixed-price quote'],
    duration: '2–5 days',
    gradient: 'from-amber-400 to-orange-300',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Design & Prototyping',
    tagline: 'See it before we build it.',
    description: 'Before writing a single line of production code, we design. Wireframes, high-fidelity mockups, interactive prototypes. You validate the vision, request changes freely, and sign off on exactly what gets built. No design surprises mid-development.',
    deliverables: ['Wireframes & user flows', 'High-fidelity UI designs', 'Interactive prototype', 'Design system foundations'],
    duration: '1–3 weeks',
    gradient: 'from-orange-400 to-amber-500',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Build & Iterate',
    tagline: 'Fast, clean, documented.',
    description: 'Development in weekly sprints with live demos every Friday. You always know what\'s being built, why, and what\'s next. We write clean, documented code — because your next developer (or your future self) deserves to understand it.',
    deliverables: ['Weekly sprint demos', 'Documented codebase', 'Staging environment access', 'QA + automated testing'],
    duration: '4–16 weeks',
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    number: '05',
    icon: HeartHandshake,
    title: 'Launch & Handover',
    tagline: 'Ship with confidence.',
    description: 'Launch day shouldn\'t be stressful. We handle deployment, monitoring setup, and final QA. Then we do a full handover — documentation, walkthrough sessions, and a 30-day post-launch support window. You\'re never left on your own.',
    deliverables: ['Production deployment', 'Monitoring & alerting setup', 'Full documentation', '30-day post-launch support'],
    duration: '3–5 days',
    gradient: 'from-orange-300 to-amber-300',
  },
];

const principles = [
  { title: 'No offshore handoffs', desc: 'The engineers you meet in discovery are the ones who build your product.' },
  { title: 'Fixed-price proposals', desc: 'No hourly billing surprises. You know the cost before we start.' },
  { title: 'Weekly visibility', desc: 'A live staging link and async update every Friday without exception.' },
  { title: 'Code you own', desc: 'All source code, documentation, and infrastructure belong to you from day one.' },
];

export function ProcessPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0C0C0E] min-h-screen">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />
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
              How We Work
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
              A process shaped by
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                a decade of mistakes.
              </span>
            </h1>
            <p
              className="text-white/40 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.8 }}
            >
              We've worked with enough teams to know exactly what causes projects to fail. Our process is designed specifically to prevent those failures — from misaligned expectations to scope creep to messy handovers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto space-y-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group bg-white/3 border border-white/8 hover:border-orange-500/20 rounded-3xl p-8 md:p-10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left: step meta */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className="text-white/15 group-hover:text-white/25 transition-colors"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '3.5rem', lineHeight: 1 }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-white mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.4rem', lineHeight: 1.2 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-orange-400/70 text-sm italic"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.tagline}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-4 py-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span
                      className="text-white/40 text-xs"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Middle: description */}
                <div className="lg:col-span-1">
                  <p
                    className="text-white/45"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.93rem', lineHeight: 1.8 }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Right: deliverables */}
                <div className="lg:col-span-1">
                  <div
                    className="text-white/30 text-xs uppercase tracking-widest mb-4"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                  >
                    Deliverables
                  </div>
                  <ul className="space-y-2.5">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-400/60 flex-shrink-0 mt-0.5" />
                        <span
                          className="text-white/50 text-sm"
                          style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}
                        >
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principles */}
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
              Our Commitments
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
              What we promise on every project.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-black/5"
              >
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded mb-5" />
                <h3
                  className="text-[#0C0C0E] mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.75 }}
                >
                  {p.desc}
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
              Ready to start the
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                discovery call?
              </span>
            </h2>
            <p
              className="text-white/40 mb-10 max-w-md mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}
            >
              It costs nothing, takes 30 minutes, and you'll leave with real clarity on what your project needs.
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-xl hover:shadow-orange-500/30 transition-all"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1rem' }}
            >
              Book a Discovery Call
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
