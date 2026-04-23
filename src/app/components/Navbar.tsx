import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe2 } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router';

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.substring(1);
      if (location.pathname === '/') {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleStartProject = () => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0C0C0E]/95 backdrop-blur-lg border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-white tracking-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.15rem' }}
            >
              Studio Planeta
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === location.pathname ||
                (link.href.startsWith('/') && !link.href.startsWith('/#') && location.pathname === link.href);
              return (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className={`transition-colors text-sm tracking-wide ${
                    isActive ? 'text-orange-400' : 'text-white/60 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={handleStartProject}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Start a Project
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-white p-1"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 z-40 bg-[#0C0C0E]/98 backdrop-blur-xl pt-24 pb-10 px-8 flex flex-col gap-6 border-b border-white/10"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left text-white/70 hover:text-white text-2xl transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleStartProject}
              className="mt-4 w-full py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white text-base"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
