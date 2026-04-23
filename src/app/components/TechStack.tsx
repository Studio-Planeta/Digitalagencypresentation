import { motion } from 'motion/react';

const categories = [
  {
    name: 'Frontend',
    color: 'from-orange-500/15 to-orange-500/5',
    border: 'border-orange-500/20',
    dot: 'bg-orange-400',
    techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    color: 'from-amber-400/15 to-amber-400/5',
    border: 'border-amber-400/20',
    dot: 'bg-amber-400',
    techs: ['Node.js', 'Python', 'Go', 'Java', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Database',
    color: 'from-orange-400/12 to-orange-400/3',
    border: 'border-orange-400/15',
    dot: 'bg-orange-300',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase', 'Prisma'],
  },
  {
    name: 'DevOps & Cloud',
    color: 'from-amber-500/15 to-amber-500/5',
    border: 'border-amber-500/20',
    dot: 'bg-amber-500',
    techs: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions'],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="bg-[#F9F6EF] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="text-orange-500 text-sm tracking-widest uppercase block mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
          >
            Technology Stack
          </span>
          <h2
            className="text-[#0C0C0E] mb-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            We speak the language
            <br />
            of modern engineering.
          </h2>
          <p
            className="text-[#6B6B6B] max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.7 }}
          >
            Fluent in the tools that power today's best products — and experienced enough to choose the right ones for your project.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${cat.color} border ${cat.border} rounded-3xl p-8`}
            >
              {/* Category label */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className={`w-2 h-2 rounded-full ${cat.dot}`} />
                <span
                  className="text-[#0C0C0E] text-sm tracking-wide uppercase"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  {cat.name}
                </span>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.techs.map((tech, tIdx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + tIdx * 0.05 }}
                    className="bg-white/70 border border-black/8 text-[#333] rounded-full px-4 py-2 text-sm hover:bg-white hover:shadow-sm transition-all cursor-default"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
