import { motion } from 'motion/react';
import { Code2, Server, Database, Cloud, Palette, Lightbulb, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description:
      'Visually stunning, brand-aligned digital experiences. We craft beautiful interfaces that convert — combining aesthetics with UX strategy.',
    tags: ['UI/UX', 'Figma', 'Design Systems'],
    color: 'from-orange-500/15 to-transparent',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    link: null,
  },
  {
    icon: Code2,
    title: 'Frontend Engineering',
    description:
      'Pixel-perfect, responsive interfaces that delight users. We obsess over details — animations, accessibility, and every micro-interaction.',
    tags: ['TypeScript', 'Tailwind', 'Motion'],
    color: 'from-amber-400/10 to-transparent',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
    link: '/services/frontend',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Robust, secure, and scalable APIs and services that power your product. From microservices to monoliths — done right.',
    tags: ['Node.js', 'Python', 'Go'],
    color: 'from-orange-500/10 to-transparent',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    link: null,
  },
  {
    icon: Database,
    title: 'Database Design',
    description:
      'Optimized data architectures that keep your application fast and reliable. We design schemas that scale elegantly.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis'],
    color: 'from-amber-400/10 to-transparent',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
    link: null,
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    description:
      'Automated CI/CD pipelines, infrastructure as code, and cloud-native deployments that ensure zero-downtime delivery.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    color: 'from-orange-500/10 to-transparent',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    link: null,
  },
  {
    icon: Lightbulb,
    title: 'Tech Consulting',
    description:
      "Strategic guidance from engineers who've been in the trenches. Architecture reviews, tech stack selection, and mentoring.",
    tags: ['Architecture', 'Audits', 'Strategy'],
    color: 'from-amber-400/10 to-transparent',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
    link: null,
  },
];

export function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-[#F9F6EF] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-orange-500 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              What We Do
            </span>
            <h2
              className="text-[#0C0C0E]"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              Services built for
              <br />
              ambitious products.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6B6B] max-w-sm"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.7 }}
          >
            We cover the full digital stack — from design systems to deployment pipelines. One team, full ownership.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => service.link && navigate(service.link)}
              className={`group relative bg-white rounded-3xl p-8 border border-black/5 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/8 transition-all duration-300 overflow-hidden ${service.link ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className="text-[#0C0C0E] pr-4"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.3 }}
                  >
                    {service.title}
                  </h3>
                  <ArrowUpRight className={`w-5 h-5 ${service.link ? 'group-hover:text-orange-400' : ''} text-[#C0C0C0] group-hover:scale-110 transition-all flex-shrink-0 mt-0.5`} />
                </div>
                <p
                  className="text-[#6B6B6B] mb-6"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.9rem', lineHeight: 1.7 }}
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-black/4 text-[#555] rounded-full px-3 py-1 text-xs"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}