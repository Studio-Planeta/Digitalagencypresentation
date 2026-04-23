import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const IMG = {
  ecommerce: 'https://images.unsplash.com/photo-1646193186138-148d07f84b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  fintech: 'https://images.unsplash.com/photo-1642132652866-6fa262d3161f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  healthcare: 'https://images.unsplash.com/photo-1767449356630-c60094b1d1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  realestate: 'https://images.unsplash.com/photo-1617052167777-f0f26b5c54f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  saas: 'https://images.unsplash.com/photo-1584931423312-5d53d862446a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  music: 'https://images.unsplash.com/photo-1511138743687-5c14e8cfcf47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
};

const featuredProject = {
  number: '01',
  name: 'Merino',
  tagline: 'E-Commerce Platform',
  description: 'A full-stack e-commerce platform with real-time inventory, AI recommendations, and sub-200ms load times across 40+ countries.',
  tags: ['Web Design', 'Frontend', 'Backend'],
  image: IMG.ecommerce,
  year: '2024',
};

const gridProjects = [
  {
    number: '02',
    name: 'Finvault',
    tagline: 'Banking Dashboard',
    tags: ['Frontend', 'Backend'],
    image: IMG.fintech,
  },
  {
    number: '03',
    name: 'HealthPath',
    tagline: 'Healthcare Management',
    tags: ['Full-Stack'],
    image: IMG.healthcare,
  },
  {
    number: '04',
    name: 'EstateIQ',
    tagline: 'Real Estate Platform',
    tags: ['Web Design', 'Frontend'],
    image: IMG.realestate,
  },
  {
    number: '05',
    name: 'CloudBurst',
    tagline: 'SaaS Analytics',
    tags: ['Full-Stack', 'DevOps'],
    image: IMG.saas,
  },
  {
    number: '06',
    name: 'Vibe',
    tagline: 'Music Streaming App',
    tags: ['Frontend', 'Web Design'],
    image: IMG.music,
  },
];

export function PortfolioSection() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="bg-[#0C0C0E] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-orange-400 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Selected Work
            </span>
            <h2
              className="text-white"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              Products we've shaped,
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                shipped, and scaled.
              </span>
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('/portfolio')}
            className="hidden md:flex items-center gap-2 text-white/40 hover:text-orange-400 transition-colors group"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
          >
            View all 12 projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Featured + Side grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

          {/* Featured project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden cursor-pointer"
            style={{ minHeight: '480px' }}
            onClick={() => navigate('/portfolio')}
          >
            {/* Image */}
            <img
              src={featuredProject.image}
              alt={featuredProject.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Permanent overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/30 to-transparent" />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Ghost number */}
            <div
              className="absolute top-6 right-8 text-white/5 group-hover:text-white/10 transition-colors select-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '8rem', lineHeight: 1 }}
            >
              {featuredProject.number}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 border border-white/15 text-white/70 rounded-full px-3 py-1 text-xs backdrop-blur-sm"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div
                    className="text-white/40 text-sm mb-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {featuredProject.tagline} · {featuredProject.year}
                  </div>
                  <h3
                    className="text-white"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '2.2rem', lineHeight: 1 }}
                  >
                    {featuredProject.name}
                  </h3>
                  <p
                    className="text-white/50 mt-2 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.88rem', lineHeight: 1.6 }}
                  >
                    {featuredProject.description}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all flex-shrink-0 ml-4">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side 2 small cards */}
          <div className="flex flex-col gap-4">
            {gridProjects.slice(0, 2).map((proj, idx) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onClick={() => navigate('/portfolio')}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex-1"
                style={{ minHeight: '224px' }}
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/90 via-[#0C0C0E]/20 to-transparent" />
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/15 transition-colors duration-400" />

                <div className="absolute top-4 right-4">
                  <div
                    className="text-white/10 group-hover:text-white/20 transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '2.5rem', lineHeight: 1 }}
                  >
                    {proj.number}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-1.5 mb-2 flex-wrap">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-white/50 text-xs"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/35 text-xs mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{proj.tagline}</div>
                      <h3
                        className="text-white"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.3rem' }}
                      >
                        {proj.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-orange-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gridProjects.slice(2).map((proj, idx) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => navigate('/portfolio')}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: '260px' }}
            >
              <img
                src={proj.image}
                alt={proj.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/90 via-[#0C0C0E]/20 to-transparent" />
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-400" />

              {/* Ghost number */}
              <div
                className="absolute top-4 right-5 text-white/8 group-hover:text-white/15 transition-colors select-none"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '4rem', lineHeight: 1 }}
              >
                {proj.number}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex gap-1.5 flex-wrap mb-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-white/40 text-xs"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/30 text-xs mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{proj.tagline}</div>
                    <h3
                      className="text-white"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.4rem' }}
                    >
                      {proj.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/25 group-hover:text-orange-400 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:hidden"
        >
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/60 hover:border-orange-400/40 hover:text-orange-400 transition-all"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
          >
            View all 12 projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
