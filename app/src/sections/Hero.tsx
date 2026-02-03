import { useEffect, useState, useRef } from 'react';
import { Linkedin, Github, ArrowRight, Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs with parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 transition-transform duration-300 ease-out"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 transition-transform duration-300 ease-out"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge with animation */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ 
                backgroundColor: 'rgba(0, 113, 227, 0.1)',
                transitionDelay: '100ms'
              }}
            >
              <span className="w-2 h-2 bg-[var(--accent-blue)] rounded-full animate-pulse" />
              <span className="text-sm font-medium" style={{ color: 'var(--accent-blue)' }}>
                Currently at AT&T
              </span>
            </div>

            {/* Name with stagger animation */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ 
                color: 'var(--text-primary)',
                transitionDelay: '200ms'
              }}
            >
              Mayur Jadhav
            </h1>

            {/* Title */}
            <p
              className={`mt-4 text-xl md:text-2xl font-medium transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ 
                color: 'var(--text-secondary)',
                transitionDelay: '300ms'
              }}
            >
              Gen AI Engineer
            </p>

            {/* Description */}
            <p
              className={`mt-6 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ 
                color: 'var(--text-secondary)',
                transitionDelay: '400ms'
              }}
            >
              Building intelligent systems that bridge data, AI, and business value. 
              Currently architecting a{' '}
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                schema-agnostic AI platform
              </span>{' '}
              at AT&T that connects to diverse data sources through dynamic knowledge graphs 
              and executor bundles.
            </p>

            {/* CTA Buttons */}
            <div
              className={`mt-10 flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <button
                onClick={() => scrollToSection('platform')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-blue)] rounded-full text-white font-medium btn-primary"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`mt-10 flex items-center gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <a
                href="https://linkedin.com/in/mayurjv"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  color: 'var(--text-secondary)'
                }}
              >
                <Linkedin className="w-5 h-5 transition-all group-hover:text-[var(--accent-blue)] group-hover:scale-110" />
              </a>
              <a
                href="https://github.com/MayurJadhav-1998"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  color: 'var(--text-secondary)'
                }}
              >
                <Github className="w-5 h-5 transition-all group-hover:text-[var(--accent-blue)] group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Visual with floating animation */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div 
              className="relative"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-40"
                style={{ 
                  background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
                  filter: 'blur(60px)'
                }}
              />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border animate-float"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <img
                  src="hero-visual.jpg"
                  alt="AI Knowledge Graph Visualization"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 50%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
            Scroll
          </span>
          <ChevronDown 
            className="w-5 h-5 animate-bounce transition-colors group-hover:text-[var(--accent-blue)]" 
            style={{ color: 'var(--text-secondary)' }}
          />
        </button>
      </div>
    </section>
  );
}
