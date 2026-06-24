export const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      padding: '64px 0',
      color: 'var(--color-text-secondary)',
      fontSize: '14px',
      marginTop: '64px'
    }}>
      <div className="container flex items-start justify-between" style={{ flexWrap: 'wrap', gap: '32px' }}>
        <div className="flex flex-col gap-4" style={{ maxWidth: '300px' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            Amresh Baskar.
          </div>
          <p style={{ lineHeight: 1.6 }}>
            Building SaaS Products, Web Applications, Cloud Solutions & Business Automation.
          </p>
          <div style={{ fontSize: '12px', marginTop: '16px' }}>
            &copy; {new Date().getFullYear()} Pearl Cloud Solutions.
          </div>
        </div>
        
        <div className="flex gap-12" style={{ flexWrap: 'wrap' }}>
          <div className="flex flex-col gap-3">
            <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: '14px' }}>Navigation</h4>
            <a href="#about" className="text-muted">About</a>
            <a href="#services" className="text-muted">Services</a>
            <a href="#projects" className="text-muted">Projects</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: '14px' }}>Socials</h4>
            <a href="https://www.linkedin.com/in/amresh-baskar-830350325" target="_blank" rel="noopener noreferrer" className="text-muted">LinkedIn</a>
            <a href="#" className="text-muted">GitHub</a>
            <a href="#" className="text-muted">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
