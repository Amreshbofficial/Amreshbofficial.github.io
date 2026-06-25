import { useRef, useState, useEffect } from 'react';
import { Section } from '../../components/layout/Section';
import { Card } from '../../components/ui/Card';

const projects = [
  {
    title: 'PearlSync - Multi-Tenant Retail SaaS',
    description: 'Enterprise-grade multi-tenant SaaS platform for retail businesses featuring POS billing, inventory management, customer credit, subscriptions, RBAC, multi-branch support, Razorpay integration, and real-time analytics.',
    collaboration: 'Flagship SaaS Product by Pearl Cloud Solutions',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD', 'Tailwind CSS', 'WebSockets', 'Razorpay', 'WhatsApp API'],
    link: '#',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  },
  {
    title: 'Flysol Technologies',
    description: "Built a modern corporate platform for a forward-thinking technology partner. Engineered a scalable React frontend with dynamic Tailwind CSS and integrated a custom admin panel to manage enterprise services and AI-powered optimizations.",
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Custom Admin'],
    link: 'https://www.flysol.in/',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    )
  },
  {
    title: 'Salugai Shop - Affiliate Marketing',
    description: 'Built and currently managing a high-traffic Amazon affiliate marketing platform. Powered by WordPress, the project involves end-to-end SEO optimization, Google AdSense monetization, and content strategies to drive daily conversions and passive revenue.',
    collaboration: 'Personal Passion Project',
    tags: ['WordPress', 'SEO', 'Google AdSense', 'Affiliate Marketing'],
    link: 'https://salugaishop.com/',
    gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <path d="M3 3v18h18"></path>
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
      </svg>
    )
  },
  {
    title: 'Colors Landscape',
    description: "Developed a premium corporate website for Chennai's leading landscaping company. The platform integrates a custom PHP admin panel to manage architectural garden portfolios, client testimonials, and service inquiries, built with a robust Bootstrap UI.",
    collaboration: 'Developed in collaboration with TechCart Enterprise',
    tags: ['PHP', 'JavaScript', 'Bootstrap', 'Custom Admin'],
    link: 'https://colorslandscape.com/',
    gradient: 'linear-gradient(135deg, rgba(20, 83, 45, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
    )
  },
  {
    title: 'Green Growth Landscape Services',
    description: 'Engineered a comprehensive dynamic website for a premium landscape design company. Features a custom PHP admin panel for real-time content updates, gallery management, and inquiry tracking, paired with a responsive Bootstrap frontend.',
    collaboration: 'Developed in collaboration with TechCart Enterprise',
    tags: ['PHP', 'JavaScript', 'Bootstrap', 'Custom Admin'],
    link: 'https://www.greengrowth.co.in/',
    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    )
  },
  {
    title: 'Haribabu - UI/UX Designer Portfolio',
    description: 'Developed a dynamic personal portfolio for a UI/UX Designer. Built using React and Tailwind CSS, the platform focuses on a sleek dark-mode aesthetic, smooth animations, and an optimized layout to showcase design achievements.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://lharibabul.github.io/',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  },
  {
    title: 'Infrafox - DevOps & AIOps',
    description: 'Developed a high-performance corporate platform for a DevOps & AIOps agency. Engineered with custom PHP and modern frontend technologies to ensure fast load times, responsive design, and an optimized lead-generation flow.',
    collaboration: 'Developed during my tenure at Vhilv Technology',
    tags: ['PHP', 'HTML5', 'CSS3', 'JavaScript'],
    link: 'https://www.infrafox.ai/',
    gradient: 'linear-gradient(135deg, rgba(88, 166, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    )
  },
  {
    title: 'VISH GYM Unisex Fitness Centre',
    description: 'Designed and built a modern digital presence for a premium fitness center. Implemented a fully responsive UI to showcase facilities and trainer profiles, focusing on engaging visual aesthetics to drive local customer acquisition.',
    collaboration: 'Developed in collaboration with TechCart Enterprise',
    tags: ['PHP', 'HTML5', 'CSS3', 'JavaScript'],
    link: 'https://vishgym.in/',
    gradient: 'linear-gradient(135deg, rgba(234, 88, 12, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  }
];

export const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        // Only auto-play on desktop where slider is horizontal
        if (window.innerWidth > 768 && sliderRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
          
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scroll('right');
          }
        }
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ flex: 1 }}>
          <h2 className="section-title projects-heading" style={{ margin: 0 }}>Selected Projects</h2>
        </div>
        
        <div className="projects-badges" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flex: '0 1 auto' }}>
           <span className="text-muted" style={{ fontWeight: 500, fontSize: '15px' }}>SaaS & Enterprise</span>
           <span className="badge" style={{ backgroundColor: 'rgba(88, 166, 255, 0.1)', color: 'var(--color-primary)', border: '1px solid rgba(88, 166, 255, 0.2)', padding: '4px 12px' }}>
             {projects.length} Total Projects
           </span>
        </div>
        
        {/* Navigation Buttons for manual swiping (Hidden on mobile) */}
        <div className="hidden-mobile" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
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
        @media (max-width: 768px) {
          .projects-heading {
            text-align: center !important;
          }
          .projects-badges {
            width: 100% !important;
          }
        }
        @keyframes slideUpToast {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
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
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={() => setIsAutoPlaying(false)}
        onTouchEnd={() => setIsAutoPlaying(true)}
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
                  <a href={project.link} target={project.link !== '#' ? "_blank" : undefined} rel="noopener noreferrer" 
                     onClick={(e) => {
                       if (project.link === '#') {
                         e.preventDefault();
                         setToastMessage('🚀 PearlSync is currently under active development. Coming Soon!');
                       }
                     }}
                     style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-primary)', transition: 'all var(--transition-fast)', cursor: 'pointer' }}
                     onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = '#000'; }}
                     onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--color-primary)'; }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
                
                <p className="card-body" style={{ flexGrow: 1 }}>
                  {project.description}
                  {(project as any).collaboration && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      {(project as any).collaboration}
                    </span>
                  )}
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
      {/* Custom Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed', bottom: '40px', right: '40px', zIndex: 9999,
          background: '#0d1117', border: '1px solid var(--color-border)', borderRadius: '12px',
          padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)',
          animation: 'slideUpToast 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
          color: 'var(--color-text-primary)'
        }}>
          {toastMessage}
        </div>
      )}
    </Section>
  );
};
