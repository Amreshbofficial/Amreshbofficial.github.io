import { useState, useEffect } from 'react';

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
      borderBottom: '1px solid var(--color-border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container flex items-center justify-between" style={{ height: '64px' }}>
        
        {/* Logo */}
        <div style={{ fontWeight: 600, fontSize: '16px', letterSpacing: '-0.02em' }}>
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
          style={{ display: 'none', padding: '6px 12px' }} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Menu
        </button>
        {/* CSS workaround for mobile menu toggle button visibility */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            header button.btn { display: block !important; }
          }
        `}} />
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, width: '100%',
          backgroundColor: '#000000', borderBottom: '1px solid var(--color-border)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px'
        }}>
          {navLinks.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: activeSection === link.id ? 'var(--color-primary)' : '#ffffff' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ width: 'fit-content' }} onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
        </div>
      )}
    </header>
  );
};
