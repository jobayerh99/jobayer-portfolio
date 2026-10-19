import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaComments } from 'react-icons/fa';
import { profileData } from '../data/profile';

const navLinks = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Track active section via IntersectionObserver on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Handle keyboard ESC to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle smooth scroll navigation
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);

    if (isHomePage) {
      const targetElement = document.getElementById(item.id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
        window.history.pushState(null, '', item.href);
      }
    } else {
      // If on project detail page, navigate to home and scroll after load
      navigate(`/${item.href}`);
      setTimeout(() => {
        const targetElement = document.getElementById(item.id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-[#080c14]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Jobayer Hosen portfolio homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-sky-500 p-[1.5px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center font-mono font-bold text-sm tracking-wider text-white">
                &lt;<span className="text-pink-400">JH</span>/&gt;
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-pink-300 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 -mt-1 hidden sm:inline-block">
                MERN Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 p-1 rounded-full bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm text-sm"
          >
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { id: 'contact', href: '#contact' })}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-sky-500 hover:opacity-95 shadow-lg shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <FaComments className="w-4 h-4 text-pink-200" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { id: 'contact', href: '#contact' })}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-colors mr-1"
            >
              Talk
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden mt-3 pt-3 pb-4 px-2 rounded-2xl bg-[#0d1321] border border-slate-800 shadow-2xl space-y-1 animate-fade-in"
          >
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-pink-500/15 text-pink-400 border border-pink-500/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
