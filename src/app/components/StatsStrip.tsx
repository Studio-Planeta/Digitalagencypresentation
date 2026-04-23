import { motion } from 'motion/react';

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Avg. Experience' },
  { value: '100%', label: 'Senior Team' },
  { value: '5', label: 'Core Disciplines' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '∞', label: 'Passion for Craft' },
];

export function StatsStrip() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-amber-400 py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="text-center"
            >
              <div
                className="text-white"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '2.2rem',
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/70 text-sm mt-1"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
