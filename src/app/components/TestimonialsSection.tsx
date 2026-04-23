import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Studio Planeta delivered a complex e-commerce platform on time and under budget. Their attention to performance and code quality is unmatched.",
    name: 'Sarah Chen',
    title: 'CTO, Merino Retail Group',
    initials: 'SC',
    color: 'from-orange-500 to-amber-400',
  },
  {
    quote:
      "We've worked with many agencies, but none that communicate as clearly and ship as reliably as Studio Planeta. They're truly partners, not vendors.",
    name: 'Marcus Okonkwo',
    title: 'Founder, Finvault',
    initials: 'MO',
    color: 'from-amber-400 to-orange-300',
  },
  {
    quote:
      "Migrating our legacy infrastructure was daunting. Studio Planeta's DevOps team made it seamless — zero downtime, crystal-clear documentation.",
    name: 'Elena Vasquez',
    title: 'VP Engineering, CloudBurst',
    initials: 'EV',
    color: 'from-orange-400 to-amber-500',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#F9F6EF] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-orange-500 text-sm tracking-widest uppercase block mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
          >
            Client Stories
          </span>
          <h2
            className="text-[#0C0C0E]"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
            }}
          >
            Trusted by teams who
            <br />
            demand excellence.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-black/5 hover:shadow-xl hover:shadow-orange-500/6 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-orange-200 mb-5 flex-shrink-0" />
              <p
                className="text-[#333] flex-1 mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.8 }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}
                >
                  <span
                    className="text-white text-sm"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div
                    className="text-[#0C0C0E]"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[#999] text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
