import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  ArrowUpRight,
  CheckCircle,
} from 'lucide-react';

export default function Contact() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree for email delivery
      const response = await fetch('https://formspree.io/f/mayurjadhav1998@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name} via Portfolio`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: Open mailto link
        const mailtoLink = `mailto:mayurjadhav1998@gmail.com?subject=Message from ${encodeURIComponent(formData.name)} via Portfolio&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      // Fallback: Open mailto link
      const mailtoLink = `mailto:mayurjadhav1998@gmail.com?subject=Message from ${encodeURIComponent(formData.name)} via Portfolio&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'mayurjadhav1998@gmail.com',
      href: 'mailto:mayurjadhav1998@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (682) 374-5375',
      href: 'tel:+16823745375',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Dallas, Texas',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-30"
        style={{ 
          background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="relative container-apple">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-600 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[var(--accent-blue)]" />
            <span 
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: 'var(--accent-blue)' }}
            >
              Contact
            </span>
            <div className="w-8 h-[2px] bg-[var(--accent-blue)]" />
          </div>

          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's Build Something{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p 
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Open to collaborations, speaking opportunities, and innovative projects 
            in AI and machine learning.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-600 ${
              isRevealed
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 glass rounded-2xl card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="p-3 rounded-xl transition-all duration-300 group-hover:bg-[var(--accent-blue)]"
                    style={{ 
                      backgroundColor: 'rgba(0, 113, 227, 0.1)',
                      color: 'var(--accent-blue)'
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {item.label}
                    </p>
                    <p 
                      className="font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight 
                    className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: 'var(--accent-blue)' }}
                  />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p 
                className="text-sm mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                Connect with me
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/mayurjv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-3 glass rounded-xl transition-all duration-300 hover:border-[var(--accent-blue)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Linkedin className="w-5 h-5 transition-all group-hover:text-[var(--accent-blue)]" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/MayurJadhav-1998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-3 glass rounded-xl transition-all duration-300 hover:border-[var(--accent-blue)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Github className="w-5 h-5 transition-all group-hover:text-[var(--accent-blue)]" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-600 ${
              isRevealed
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl form-input focus:outline-none"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl form-input focus:outline-none"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl form-input focus:outline-none resize-none"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: 'var(--accent-blue)',
                  color: 'white'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div 
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-400 text-sm">
                    Thank you! Your message has been sent. I'll get back to you soon.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
