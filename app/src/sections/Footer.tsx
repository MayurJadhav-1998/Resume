import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="py-8 border-t"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="container-apple">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p style={{ color: 'var(--text-secondary)' }}>
            © 2025 Mayur Jadhav. All rights reserved.
          </p>

          {/* Tagline */}
          <p style={{ color: 'var(--text-tertiary)' }}>
            Built with precision and passion
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 transition-colors hover:text-[var(--accent-blue)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span className="text-sm">Back to Top</span>
            <div 
              className="p-1.5 rounded-lg transition-all duration-300 group-hover:bg-[rgba(0,113,227,0.1)]"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
