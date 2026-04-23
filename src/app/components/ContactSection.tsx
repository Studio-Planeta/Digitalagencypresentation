import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Clock } from 'lucide-react';

const codeImage = "https://images.unsplash.com/photo-1555680510-34daedadbdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW4lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzY5NjkwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', budget: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: '', email: '', message: '', budget: '' });
  };

  const inputClass =
    'w-full bg-white/4 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-orange-400/60 focus:bg-white/6 transition-all';
  const inputStyle = { fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.95rem' };

  return (
    <section id="contact" className="bg-[#F9F6EF] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-orange-500 text-sm tracking-widest uppercase block mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              Get In Touch
            </span>
            <h2
              className="text-[#0C0C0E] mb-6"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              Let's build something
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                remarkable.
              </span>
            </h2>
            <p
              className="text-[#6B6B6B] mb-12 max-w-md"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.8 }}
            >
              Whether you have a clear brief or just an idea, we'd love to hear from you.
              We respond to every message within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-12">
              {[
                { icon: Mail, label: 'Email us', value: 'hello@studioplaneta.com' },
                { icon: MapPin, label: 'Based in', value: 'Remote-first · Worldwide' },
                { icon: Clock, label: 'Response time', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div
                      className="text-[#999] text-xs uppercase tracking-wide"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-[#0C0C0E]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-video hidden lg:block">
              <img src={codeImage} alt="Code" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[#0C0C0E] rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="text-white/40 text-xs uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="text-white/40 text-xs uppercase tracking-widest block mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className={inputClass}
                      style={inputStyle}
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-white/40 text-xs uppercase tracking-widest block mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                  >
                    Project Budget
                  </label>
                  <select
                    className={`${inputClass} cursor-pointer`}
                    style={inputStyle}
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  >
                    <option value="" disabled className="bg-[#1a1a2e]">Select a budget range</option>
                    <option value="<10k" className="bg-[#1a1a2e]">Less than $10k</option>
                    <option value="10k-30k" className="bg-[#1a1a2e]">$10k – $30k</option>
                    <option value="30k-100k" className="bg-[#1a1a2e]">$30k – $100k</option>
                    <option value="100k+" className="bg-[#1a1a2e]">$100k+</option>
                  </select>
                </div>

                <div>
                  <label
                    className="text-white/40 text-xs uppercase tracking-widest block mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={5}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    placeholder="Describe your idea, goals, and anything else that matters..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-[0.98]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  {sent ? (
                    <>
                      <span>Message Sent!</span>
                      <span>✓</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p
                  className="text-white/20 text-xs text-center mt-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  No spam, ever. We'll reply within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
