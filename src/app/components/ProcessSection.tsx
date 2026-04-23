import { motion } from 'motion/react';
import { MessageSquare, Map, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    description:
      'We start with a deep dive into your goals, constraints, and vision. No templates — pure listening and genuine curiosity about your product.',
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategy & Scoping',
    description:
      'We map out architecture, choose the right stack, define milestones, and give you a transparent quote. No surprises.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Build & Ship',
    description:
      'Iterative development with weekly demos. You always know what\'s being built and why. We move fast without cutting corners.',
  },
  {
    number: '04',
    icon: HeartHandshake,
    title: 'Launch & Beyond',
    description:
      'Go live with confidence. We provide post-launch support, monitoring, and are your long-term engineering partner.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#0C0C0E] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span
            className="text-orange-400 text-sm tracking-widest uppercase block mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
          >
            How We Work
          </span>
          <h2
            className="text-white"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            From idea to launch —
            <br />
            a process that works.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative"
            >
              {/* Number + icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span
                  className="text-white/20"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '2rem' }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="text-white mb-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.15rem' }}
              >
                {step.title}
              </h3>
              <p
                className="text-white/40"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.88rem', lineHeight: 1.75 }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}