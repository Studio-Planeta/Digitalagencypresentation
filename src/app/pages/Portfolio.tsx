import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const IMG = {
  ecommerce: 'https://images.unsplash.com/photo-1646193186138-148d07f84b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  fintech: 'https://images.unsplash.com/photo-1642132652866-6fa262d3161f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  healthcare: 'https://images.unsplash.com/photo-1767449356630-c60094b1d1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  realestate: 'https://images.unsplash.com/photo-1617052167777-f0f26b5c54f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  saas: 'https://images.unsplash.com/photo-1584931423312-5d53d862446a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  music: 'https://images.unsplash.com/photo-1511138743687-5c14e8cfcf47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
};

const allProjects = [
  { number: '01', name: 'Merino', tagline: 'E-Commerce Platform', description: 'Full-stack commerce with real-time inventory, AI recommendations, and sub-200ms loads across 40+ countries.', tags: ['Web Design', 'Frontend', 'Backend'], image: IMG.ecommerce, year: '2024' },
  { number: '02', name: 'Finvault', tagline: 'Banking Dashboard', description: 'Secure, regulation-compliant banking interface handling €2B+ in monthly transactions.', tags: ['Frontend', 'Backend'], image: IMG.fintech, year: '2024' },
  { number: '03', name: 'HealthPath', tagline: 'Healthcare Management', description: 'HIPAA-compliant platform connecting 300+ clinics with patients via real-time scheduling.', tags: ['Full-Stack'], image: IMG.healthcare, year: '2023' },
  { number: '04', name: 'EstateIQ', tagline: 'Real Estate Platform', description: 'Property discovery platform with 3D tours and AI-powered valuation engine.', tags: ['Web Design', 'Frontend'], image: IMG.realestate, year: '2023' },
  { number: '05', name: 'CloudBurst', tagline: 'SaaS Analytics', description: 'Real-time data pipeline processing 500M+ events/day with sub-second dashboard queries.', tags: ['Full-Stack', 'DevOps'], image: IMG.saas, year: '2024' },
  { number: '06', name: 'Vibe', tagline: 'Music Streaming App', description: 'Next-gen streaming UI with spatial audio visualization and social listening rooms.', tags: ['Frontend', 'Web Design'], image: IMG.music, year: '2023' },
  { number: '07', name: 'LogiTrack', tagline: 'Logistics Platform', description: 'End-to-end supply chain visibility for 200+ carriers and 10,000+ daily shipments.', tags: ['Backend', 'DevOps'], image: IMG.ecommerce, year: '2023' },
  { number: '08', name: 'Novara', tagline: 'Luxury Fashion Brand', description: 'Award-winning brand website with editorial photography and immersive storytelling.', tags: ['Web Design'], image: IMG.realestate, year: '2022' },
  { number: '09', name: 'PulseAPI', tagline: 'Developer Platform', description: 'API management hub used by 5,000+ developers with live testing and auto-generated SDKs.', tags: ['Backend'], image: IMG.fintech, year: '2022' },
  { number: '10', name: 'MetroHomes', tagline: 'Property App', description: 'Mobile-first property search with AR placement and mortgage calculator integration.', tags: ['Full-Stack'], image: IMG.healthcare, year: '2022' },
  { number: '11', name: 'DataVault', tagline: 'Data Warehouse', description: 'Petabyte-scale data warehouse on AWS with zero-downtime migrations and cost optimization.', tags: ['DevOps', 'Backend'], image: IMG.saas, year: '2023' },
  { number: '12', name: 'StackOps', tagline: 'DevOps Platform', description: 'Internal developer platform adopted by 50+ engineering teams for self-service deployments.', tags: ['DevOps'], image: IMG.music, year: '2024' },
];

const categories = ['All', 'Web Design', 'Frontend', 'Backend', 'Full-Stack', 'DevOps'];

export function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter((p) => p.tags.includes(active));

  return (
    <div className="bg-[#0C0C0E] min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-orange-400 text-sm tracking-widest uppercase block mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Our Work
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
              Every project,
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                a story worth telling.
              </span>
            </h1>
            <p
              className="text-white/40 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.75 }}
            >
              12 projects across web design, full-stack development, and infrastructure.
              Each one built from the ground up by our senior team.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  active === cat
                    ? 'bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((proj, idx) => (
                <motion.div
                  key={proj.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{ minHeight: '300px' }}
                >
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/95 via-[#0C0C0E]/30 to-transparent" />
                  <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/12 transition-colors duration-500" />

                  {/* Ghost number */}
                  <div
                    className="absolute top-4 right-5 text-white/6 group-hover:text-white/12 transition-colors select-none"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '5rem', lineHeight: 1 }}
                  >
                    {proj.number}
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-5 left-5">
                    <span
                      className="bg-white/8 border border-white/10 text-white/40 rounded-full px-3 py-1 text-xs backdrop-blur-sm"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                      {proj.year}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
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
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="text-white/30 text-xs mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{proj.tagline}</div>
                        <h3
                          className="text-white"
                          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.1 }}
                        >
                          {proj.name}
                        </h3>
                        <p
                          className="text-white/35 text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs"
                          style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}
                        >
                          {proj.description}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
