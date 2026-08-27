import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const sectionIds = ['about', 'services', 'experience', 'projects', 'tech-stack', 'process', 'faq', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id));
    
    sections.forEach(sec => sec && observer.observe(sec));

    return () => {
      sections.forEach(sec => sec && observer.unobserve(sec));
    };
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'tech-stack', label: 'Skills' },
    { id: 'process', label: 'Process' },
  ];

  return (
      <header style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100
      }}>
      <div className="container flex items-center justify-between" style={{ height: '64px' }}>
        
        {/* Logo */}
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '16px', letterSpacing: '-0.02em' }}>
          <a href="https://github.com/Amreshbofficial" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#ffffff', transition: 'opacity 0.2s' }} className="hover:opacity-80">
            <svg height="22" viewBox="0 0 16 16" version="1.1" width="22" aria-hidden="true" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
          <a href="#" style={{ color: '#ffffff' }}>Amresh Baskar.</a>
        </div>

        {/* Desktop Nav */}
        <nav className="flex gap-6 hidden-mobile" style={{ fontSize: '13px', fontWeight: 500 }}>
          {navLinks.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              style={{ 
                color: activeSection === link.id ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                transition: 'color 0.2s ease',
                textShadow: activeSection === link.id ? '0 0 10px rgba(88, 166, 255, 0.4)' : 'none'
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden-mobile">
          <a href="#contact" className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '13px' }}>Contact Me</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="btn" 
          style={{ padding: '6px 12px', alignItems: 'center', gap: '6px' }} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span style={{ fontSize: '13px', fontWeight: 500 }}>
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </span>
          {mobileMenuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
        {/* CSS workaround for mobile menu toggle button visibility */}
        <style dangerouslySetInnerHTML={{__html: `
          header button.btn { display: none !important; }
          @media (max-width: 768px) {
            header button.btn { display: flex !important; }
          }
        `}} />
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Clickable Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed', top: '65px', left: 0, width: '100%', height: 'calc(100vh - 65px)',
                backgroundColor: 'transparent',
                zIndex: 90
              }}
            />
            
            {/* Dropdown Menu */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', top: '65px', left: 0, width: '100%',
              backgroundColor: 'rgba(10, 10, 10, 0.98)', 
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '16px 24px 24px', 
              display: 'flex', flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  color: activeSection === link.id ? 'var(--color-primary)' : '#ffffff',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {link.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '24px', padding: '12px' }} onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
