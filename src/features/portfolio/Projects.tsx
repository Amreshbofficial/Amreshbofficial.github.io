import { useRef } from 'react';
import { Section } from '../../components/layout/Section';
import { Card } from '../../components/ui/Card';

const projects = [
  {
    title: 'Arokya - E-commerce SaaS',
    description: 'A multi-tenant e-commerce platform engineered for scale. Built with modern microservices architecture to handle high volume transactions and complex inventory management.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
    link: '#',
    gradient: 'linear-gradient(135deg, rgba(88, 166, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    )
  },
  {
    title: 'TaskFlow Pro',
    description: 'Enterprise resource planning and project management tool designed for remote-first teams. Features real-time collaboration, automated workflows, and deep analytics.',
    tags: ['React', 'Node.js', 'Socket.io', 'AWS'],
    link: '#',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  },
  {
    title: 'HealthSync Portal',
    description: 'HIPAA-compliant patient management system. Integrates telemedicine capabilities, secure messaging, and automated billing workflows for modern clinics.',
    tags: ['TypeScript', 'Express', 'MongoDB', 'WebRTC'],
    link: '#',
    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    )
  },
  {
    title: 'FinDash Analytics',
    description: 'Real-time financial dashboard aggregating data from multiple payment gateways. Provides predictive analytics and automated reconciliation for finance teams.',
    tags: ['Vue.js', 'Python', 'FastAPI', 'TimescaleDB'],
    link: '#',
    gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    )
  }
];

export const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const firstChild = sliderRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.offsetWidth;
        // Scroll exactly by one card width + gap to perfectly trigger scroll-snap
        const scrollAmount = direction === 'left' ? -(cardWidth + 32) : (cardWidth + 32);
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <Section id="projects">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>Selected Projects</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <span className="text-muted" style={{ fontWeight: 500 }}>SaaS & Enterprise</span>
             <span className="badge" style={{ backgroundColor: 'rgba(88, 166, 255, 0.1)', color: 'var(--color-primary)', border: '1px solid rgba(88, 166, 255, 0.2)', padding: '4px 12px' }}>
               {projects.length} Total Projects
             </span>
          </div>
        </div>
        
        {/* Navigation Buttons for manual swiping (Hidden on mobile) */}
        <div className="hidden-mobile" style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={() => scroll('left')}
            className="nav-btn"
            style={{ width: '44px', height: '44px', borderRadius: '50%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#0d1117'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-bg-surface)'; e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            aria-label="Previous Projects"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="nav-btn"
            style={{ width: '44px', height: '44px', borderRadius: '50%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#0d1117'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-bg-surface)'; e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            aria-label="Next Projects"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .projects-slider {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 32px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          /* Add some padding to the right so the last card doesn't touch the edge */
          padding-right: 32px;
        }
        .projects-slider::-webkit-scrollbar {
          display: none;
        }
        .project-slide {
          flex: 0 0 calc(50% - 16px);
          scroll-snap-align: start;
        }
        @media (max-width: 768px) {
          .projects-slider {
            flex-direction: column;
            overflow-x: visible;
            scroll-snap-type: none;
            padding-right: 0;
            padding-bottom: 0;
            gap: 24px;
          }
          .project-slide {
            flex: 1 1 auto;
            width: 100%;
          }
        }
        .nav-btn {
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .nav-btn:active {
          transform: scale(0.85);
        }
      `}} />
      
      <div 
        ref={sliderRef}
        className="projects-slider"
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-slide"
          >
            <Card hoverable className="service-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              
              {/* Visual Mockup Header */}
              <div style={{ 
                margin: '-32px -32px 32px -32px', 
                height: '200px', 
                background: project.gradient, 
                borderBottom: '1px solid var(--color-border)',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                </div>
                {project.icon}
              </div>

              <div className="flex-1 flex flex-col">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <h3 className="card-title" style={{ margin: 0, fontSize: '20px' }}>
                    {project.title}
                  </h3>
                  <a href={project.link} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-primary)', transition: 'all var(--transition-fast)' }}
                     onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#000'; }}
                     onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--color-primary)'; }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
                
                <p className="card-body" style={{ flexGrow: 1 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};
