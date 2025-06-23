// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const typingText = document.querySelector('.typing-text');
const contactForm = document.getElementById('contact-form');

// Typing Animation
const titles = [
    'Gen AI Engineer',
    'RAG Platform Architect', 
    'Full-Stack Developer',
    'Machine Learning Engineer',
    'AI Solutions Architect'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500; // Pause before next title
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});

// Navbar Scroll Effect
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile Navigation Toggle
function toggleMobileNav() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

// Close mobile nav when clicking on a link
function closeMobileNav() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth Scrolling for Navigation Links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Close mobile nav if open
        closeMobileNav();
        
        // Update active nav link
        updateActiveNavLink(targetId);
    }
}

// Update Active Navigation Link
function updateActiveNavLink(targetId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Intersection Observer for Active Navigation
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -80px 0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = `#${entry.target.id}`;
                updateActiveNavLink(targetId);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Scroll Animation Observer
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
}

// Add animation classes to elements
function addAnimationClasses() {
    // Add fade-in class to various elements
    const fadeElements = document.querySelectorAll('.section-header, .about-text, .timeline-item, .project-card, .education-card, .achievement-card, .skill-category');
    fadeElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add slide-in classes to specific elements
    const leftSlideElements = document.querySelectorAll('.about-text, .contact-info');
    leftSlideElements.forEach(element => {
        element.classList.add('slide-in-left');
    });
    
    const rightSlideElements = document.querySelectorAll('.about-stats, .contact-form');
    rightSlideElements.forEach(element => {
        element.classList.add('slide-in-right');
    });
}

// Contact Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Basic form validation
    if (!formObject.name || !formObject.email || !formObject.subject || !formObject.message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(formObject.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual form handling)
    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
    contactForm.reset();
    
    // In a real implementation, you would send the data to your server
    console.log('Form submitted:', formObject);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                max-width: 400px;
                padding: 1rem;
                border-radius: 0.5rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                z-index: 1001;
                animation: slideInRight 0.3s ease-out;
            }
            
            .notification-success {
                background: #10b981;
                color: white;
            }
            
            .notification-error {
                background: #ef4444;
                color: white;
            }
            
            .notification-info {
                background: #3b82f6;
                color: white;
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 0.25rem;
                transition: background-color 0.2s;
            }
            
            .notification-close:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Lazy Loading for Images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger loading
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Keyboard Navigation Support
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileNav();
        }
        
        // Enter key on nav toggle
        if (e.key === 'Enter' && e.target === navToggle) {
            toggleMobileNav();
        }
    });
}

// Performance Optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Preload Critical Resources
function preloadResources() {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = 'assets/profile.jpg';
    
    // Preload project images
    const projectImages = [
        'assets/ats-resume-project.jpg',
        'assets/shopify-customer-service.jpg'
    ];
    
    projectImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Setup event listeners
    window.addEventListener('scroll', throttle(handleNavbarScroll, 10));
    navToggle.addEventListener('click', toggleMobileNav);
    
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Setup observers and animations
    setupIntersectionObserver();
    addAnimationClasses();
    setupScrollAnimations();
    setupLazyLoading();
    setupKeyboardNavigation();
    
    // Performance optimizations
    preloadResources();
    
    // Initial navbar state
    handleNavbarScroll();
    
    // Add loading class to body for initial animations
    document.body.classList.add('loading');
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Error handling for missing elements
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element not found: ${selector}`);
    }
    return element;
}

// Utility function for smooth scrolling (fallback for older browsers)
function smoothScrollTo(targetY, duration = 1000) {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();
    
    function step() {
        const progress = (performance.now() - startTime) / duration;
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startY + (difference * ease));
        
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Analytics and tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Replace with your analytics implementation
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, eventData);
    
    // Example: Custom analytics
    // analytics.track(eventName, eventData);
}

// Track important user interactions
function setupAnalytics() {
    // Track navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('navigation_click', {
                section: link.getAttribute('href')
            });
        });
    });
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('button_click', {
                button_text: button.textContent.trim(),
                button_type: button.classList.contains('btn-primary') ? 'primary' : 'secondary'
            });
        });
    });
    
    // Track form submissions
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackEvent('form_submit', {
                form_type: 'contact'
            });
        });
    }
    
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', throttle(() => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                trackEvent('scroll_depth', {
                    depth: maxScrollDepth
                });
            }
        }
    }, 1000));
}

// Initialize analytics
document.addEventListener('DOMContentLoaded', setupAnalytics);

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        typeWriter,
        handleNavbarScroll,
        toggleMobileNav,
        smoothScroll,
        isValidEmail,
        showNotification,
        trackEvent
    };
}