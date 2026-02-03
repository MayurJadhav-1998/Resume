import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Platform', href: '#platform' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="text-lg font-semibold transition-colors hover:text-[var(--accent-blue)]"
              style={{ color: 'var(--text-primary)' }}
            >
              Mayur Jadhav
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[var(--accent-blue)] bg-[rgba(0,113,227,0.1)]'
                      : 'hover:text-[var(--text-primary)] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                  style={{ color: activeSection === link.href.slice(1) ? 'var(--accent-blue)' : 'var(--text-secondary)' }}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full transition-all duration-300 hover:bg-[rgba(0,113,227,0.1)]"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="hidden md:inline-flex px-5 py-2.5 bg-[var(--accent-blue)] rounded-full text-sm font-medium text-white btn-primary"
              >
                Get in Touch
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-medium transition-all duration-300 hover:text-[var(--accent-blue)]"
              style={{ 
                color: 'var(--text-primary)',
                animationDelay: `${index * 50}ms`
              }}
            >
              {link.name}
            </button>
          ))}
          
          {/* Theme toggle in mobile menu */}
          <button
            onClick={toggleTheme}
            className="mt-4 flex items-center gap-3 px-6 py-3 rounded-full border transition-all"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="mt-4 px-8 py-3 bg-[var(--accent-blue)] rounded-full text-lg font-medium text-white"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}
