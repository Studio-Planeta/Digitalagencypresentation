import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const teamImage = 'https://images.unsplash.com/photo-1603189751032-7d5b09d9c8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200';

const leads = [
  {
    name: 'Marco Oñate',
    role: 'Co-founder & Frontend Lead',
    years: '14 yrs',
    bio: 'Marco has spent 14 years crafting interfaces at companies like Spotify and N26. He invented our design system methodology and believes that performance is the ultimate UX feature.',
    quote: '"Every pixel matters. Performance is a feature."',
    expertise: ['React', 'Vue', 'TypeScript', 'Design Systems', 'Animations'],
    gradient: 'from-orange-500 to-amber-400',
    initials: 'MO',
  },
  {
    name: 'Elena Vasquez',
    role: 'Co-founder & Backend Lead',
    years: '15 yrs',
    bio: 'Elena is a distributed systems expert who has led backend teams at Stripe and Revolut. She has an uncanny ability to architect services that are both elegant and bulletproof at scale.',
    quote: '"Scalable systems are not built by accident."',
    expertise: ['Node.js', 'Python', 'Go', 'Microservices', 'GraphQL'],
    gradient: 'from-amber-400 to-orange-300',
    initials: 'EV',
  },
  {
    name: 'Dmitri Kovač',
    role: 'Co-founder & DevOps Lead',
    years: '13 yrs',
    bio: 'Dmitri has built and scaled cloud infrastructure for fintech and healthtech companies across Europe. He runs a zero-tolerance policy for downtime and a zero-compromise stance on security.',
    quote: '"Zero downtime is not a goal. It\'s a baseline."',
    expertise: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Security'],
    gradient: 'from-orange-400 to-amber-500',
    initials: 'DK',
  },
];

const seniors = [
  { name: 'Sarah Chen', role: 'Senior Frontend Engineer', years: '11 yrs', gradient: 'from-orange-500/80 to-amber-400/80', initials: 'SC', focus: 'React · Accessibility · Animations' },
  { name: 'James Park', role: 'Senior Backend Engineer', years: '10 yrs', gradient: 'from-amber-400/80 to-orange-300/80', initials: 'JP', focus: 'Node.js · Databases · APIs' },
  { name: 'Amara Diallo', role: 'Senior Frontend Engineer', years: '10 yrs', gradient: 'from-orange-400/80 to-red-400/80', initials: 'AD', focus: 'Vue · TypeScript · UX' },
  { name: 'Lucas Ferreira', role: 'Senior Full-Stack Engineer', years: '12 yrs', gradient: 'from-amber-500/80 to-orange-400/80', initials: 'LF', focus: 'Full-Stack · Arch · DevX' },
  { name: 'Nina Okonkwo', role: 'Senior DevOps Engineer', years: '10 yrs', gradient: 'from-orange-300/80 to-amber-300/80', initials: 'NO', focus: 'GCP · Docker · Monitoring' },
];

const values = [
  { title: 'Craft over speed', desc: 'We take pride in the quality of our work. We never ship something we wouldn\'t be proud to put our name on.' },
  { title: 'Transparency always', desc: 'No hidden costs, no scope creep surprises. We communicate clearly and often.' },
  { title: 'Engineers first', desc: 'We are not a sales-driven agency. Every team member writes real code on real projects.' },
  { title: 'Long-term thinking', desc: 'We build for maintainability and longevity — not just the demo.' },
];

export function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9F6EF] min-h-screen">

      {/* Hero */}
      <section className="bg-[#0C0C0E] pt-40 pb-24 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-orange-400 text-sm tracking-widest uppercase block mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              About Us
            </span>
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              Three engineers.
              <br />
              One obsession:{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                great software.
              </span>
            </h1>
            <p
              className="text-white/45 max-w-lg"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.8 }}
            >
              Studio Planeta was founded by three senior engineers who left big tech to build something more intentional — a boutique agency where every line of code matters and every client relationship is treated like a long-term partnership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={teamImage} alt="Studio Planeta team" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0C0C0E]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl px-6 py-4 shadow-xl shadow-orange-500/30">
              <div
                className="text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}
              >
                50+
              </div>
              <div className="text-white/70 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Combined years of experience
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co-founders */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span
              className="text-orange-500 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Leadership
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
              The founders behind the craft.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {leads.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white rounded-3xl p-8 border border-black/5 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col"
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${person.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span
                      className="text-white"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.2rem' }}
                    >
                      {person.initials}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-[#0C0C0E]"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}
                    >
                      {person.name}
                    </h3>
                    <div className="text-[#999] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {person.role}
                    </div>
                    <div className="text-orange-500 text-xs mt-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                      {person.years} experience
                    </div>
                  </div>
                </div>

                <p
                  className="text-[#555] mb-6 flex-1"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.88rem', lineHeight: 1.75 }}
                >
                  {person.bio}
                </p>

                {/* Quote */}
                <div className="border-l-2 border-orange-400/40 pl-4 mb-6">
                  <p
                    className="text-[#333] italic"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.85rem', lineHeight: 1.6 }}
                  >
                    {person.quote}
                  </p>
                </div>

                {/* Expertise */}
                <div className="flex flex-wrap gap-1.5">
                  {person.expertise.map((e) => (
                    <span
                      key={e}
                      className="bg-[#F9F6EF] border border-black/8 text-[#555] rounded-full px-2.5 py-1 text-xs"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior team */}
      <section className="bg-[#0C0C0E] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span
              className="text-orange-400 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              The Team
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
              All senior. All in.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {seniors.map((s, idx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-orange-500/20 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4`}>
                  <span
                    className="text-white"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    {s.initials}
                  </span>
                </div>
                <h4
                  className="text-white mb-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  {s.name}
                </h4>
                <div
                  className="text-white/40 text-xs mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {s.role}
                </div>
                <div
                  className="text-orange-400/70 text-xs mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  {s.years}
                </div>
                <div
                  className="text-white/25 text-xs"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}
                >
                  {s.focus}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span
              className="text-orange-500 text-sm tracking-widest uppercase block mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              What We Stand For
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
              Principles we won't compromise.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-black/5"
              >
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded mb-5" />
                <h3
                  className="text-[#0C0C0E] mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.15rem' }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-[#6B6B6B]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.9rem', lineHeight: 1.75 }}
                >
                  {v.desc}
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
              We're{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                always looking
              </span>{' '}
              for great projects.
            </h2>
            <p
              className="text-white/40 mb-10 max-w-lg mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}
            >
              If you have something worth building, we want to hear about it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact')}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-xl hover:shadow-orange-500/30 transition-all"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/careers')}
                className="px-8 py-4 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
              >
                Join the Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
