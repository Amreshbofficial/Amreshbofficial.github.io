export const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      padding: '64px 0',
      color: 'var(--color-text-secondary)',
      fontSize: '14px',
      marginTop: '64px'
    }}>
      <div className="container flex items-start justify-between footer-container" style={{ flexWrap: 'wrap', gap: '32px' }}>
        <div className="flex flex-col gap-4 footer-col" style={{ maxWidth: '300px' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            Amresh Baskar.
          </div>
          <p style={{ lineHeight: 1.6 }}>
            Building SaaS Products, Web Applications, Cloud Solutions & Business Automation.
          </p>
          <div style={{ fontSize: '13px', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>&copy; {new Date().getFullYear()} Pearl Cloud Solutions.</span>
            <a href="https://www.instagram.com/pearlcloudsolutions/" target="_blank" rel="noopener noreferrer" className="text-muted" aria-label="Pearl Cloud Solutions Instagram" style={{ display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
        
        <div className="flex gap-12 footer-links" style={{ flexWrap: 'wrap' }}>
          <div className="flex flex-col gap-3 footer-col">
            <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: '14px' }}>Navigation</h4>
            <a href="#about" className="text-muted">About</a>
            <a href="#services" className="text-muted">Services</a>
            <a href="#projects" className="text-muted">Projects</a>
          </div>
          <div className="flex flex-col gap-3 footer-col">
            <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: '14px' }}>Socials</h4>
            <a href="https://www.linkedin.com/in/amresh-baskar-830350325" target="_blank" rel="noopener noreferrer" className="text-muted">LinkedIn</a>
            <a href="https://github.com/Amreshbofficial" target="_blank" rel="noopener noreferrer" className="text-muted">GitHub</a>
            <a href="https://www.instagram.com/amreshbofficial/" target="_blank" rel="noopener noreferrer" className="text-muted">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
