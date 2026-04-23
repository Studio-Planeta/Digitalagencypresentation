import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const teamImage = "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBkZXZlbG9wZXJzJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjB0ZWNoJTIwb2ZmaWNlfGVufDF8fHx8MTc3Njk2OTAwNnww&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  'Every team member has 10+ years of real-world experience',
  'We write clean, maintainable, documented code',
  'Direct communication — no middlemen or account managers',
  'Transparent pricing and delivery timelines',
  'Long-term partners, not just contractors',
];

const stats = [
  { value: '10+', label: 'Years avg. experience' },
  { value: '200+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '5★', label: 'Average review' },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#0C0C0E] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={teamImage}
                alt="Studio Planeta team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0C0C0E]/50 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl p-6 shadow-2xl shadow-orange-500/30"
            >
              <div
                className="text-white/80 text-sm mb-1"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
              >
                Combined experience
              </div>
              <div
                className="text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '3rem', lineHeight: 1 }}
              >
                50+
              </div>
              <div
                className="text-white/70 text-sm mt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                years across the team
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-orange-400 text-sm tracking-widest uppercase block mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Who We Are
            </span>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              A collective of senior
              <br />
              engineers who care
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                deeply about craft.
              </span>
            </h2>

            <p
              className="text-white/50 mb-10"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1rem', lineHeight: 1.8 }}
            >
              We didn't start as a traditional agency. We're engineers first — people who've spent over a decade shipping products at scale, solving hard problems, and building lasting digital infrastructure. Studio Planeta was born from a simple belief: that great software deserves great engineers.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-12">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span
                    className="text-white/60"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.9rem', lineHeight: 1.6 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mini stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/4 border border-white/8 rounded-2xl p-5"
                >
                  <div
                    className="text-white mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.8rem', lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-white/40 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
