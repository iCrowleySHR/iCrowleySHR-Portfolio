import { useState, useEffect } from 'react';
import { navbar } from '../data/navbar';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-dark-900/80 backdrop-blur-xl border-b border-zinc-800/50 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          <span className="text-sky-400">&lt;</span>Gualda<span className="text-sky-400">/&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navbar.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navbar.cta.href}
            className="ml-4 text-sm bg-gradient-to-r from-sky-500 to-violet-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            {navbar.cta.text}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-zinc-300 p-2 hover:text-white transition" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-3 mx-6 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navbar.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-white hover:bg-zinc-800/50 px-4 py-3 rounded-xl font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navbar.cta.href}
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-sky-500 to-violet-500 text-white px-6 py-3 rounded-xl font-semibold text-center mt-2 hover:shadow-lg hover:shadow-sky-500/20 transition-all"
            >
              {navbar.cta.text}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
