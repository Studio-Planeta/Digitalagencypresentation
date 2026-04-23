import { Globe2, Twitter, Github, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router';

const navGroups = [
  {
    title: 'Services',
    links: [
      { label: 'Web Design', to: '/#services' },
      { label: 'Frontend Engineering', to: '/services/frontend' },
      { label: 'Backend Development', to: '/#services' },
      { label: 'Database Design', to: '/#services' },
      { label: 'DevOps & Cloud', to: '/#services' },
      { label: 'Tech Consulting', to: '/#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Process', to: '/process' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@studioplaneta.com', to: '/#contact' },
      { label: 'LinkedIn', to: '/#contact' },
      { label: 'GitHub', to: '/#contact' },
    ],
  },
];

export function Footer() {
  const navigate = useNavigate();

  const handleLink = (to: string) => {
    if (to.startsWith('/#')) {
      navigate(to);
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="bg-[#0A0A0C] border-t border-white/5 px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}
              >
                Studio Planeta
              </span>
            </button>
            <p
              className="text-white/30 max-w-xs mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.88rem', lineHeight: 1.8 }}
            >
              A collective of senior engineers delivering world-class web development, backend systems, and DevOps infrastructure.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-orange-400 hover:border-orange-400/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4
                className="text-white/50 text-xs uppercase tracking-widest mb-5"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLink(link.to)}
                      className="text-white/30 hover:text-white/70 transition-colors text-sm text-left"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {new Date().getFullYear()} Studio Planeta. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <button
                key={item}
                className="text-white/20 hover:text-white/40 text-xs transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
