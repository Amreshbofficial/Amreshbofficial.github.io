import { Section } from '../../components/layout/Section';
import { Card } from '../../components/ui/Card';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Frontend',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    skills: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
  },
  {
    title: 'Backend',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI']
  },
  {
    title: 'Database',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  },
  {
    title: 'Mobile & APIs',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    skills: ['Flutter', 'RESTful APIs', 'GraphQL']
  },
  {
    title: 'Tools & Cloud',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
    skills: ['AWS (EC2, S3)', 'Docker', 'Git', 'GitHub', 'Linux/Ubuntu']
  },
  {
    title: 'Design & Other',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    skills: ['Figma', 'UI/UX Principles', 'Agile/Scrum', 'Problem Solving']
  }
];

export const TechStack = () => {
  return (
    <Section id="tech-stack">
      <div className="section-header">
        <h2 className="section-title">Tech Stack & Skills</h2>
        <p className="card-body" style={{ maxWidth: '600px' }}>
          Modern technologies I use to build scalable, high-performance applications.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        style={{ perspective: "1000px" }}
      >
        {categories.map((category, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { opacity: 0, rotateX: -15, y: 30 },
              visible: { 
                opacity: 1, 
                rotateX: 0,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" } 
              }
            }}
            style={{ height: '100%', transformOrigin: "top center" }}
          >
            <Card hoverable className="service-card" style={{ height: '100%' }}>
              <div className="flex-1 flex flex-col">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div className="card-icon" style={{ margin: 0, width: '40px', height: '40px' }}>
                    {category.icon}
                  </div>
                  <h3 className="card-title" style={{ margin: 0 }}>
                    {category.title}
                  </h3>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="badge" 
                      style={{ 
                        padding: '4px 10px', 
                        backgroundColor: i === 0 ? 'rgba(88, 166, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                        color: i === 0 ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        border: i === 0 ? '1px solid rgba(88, 166, 255, 0.2)' : '1px solid var(--color-border)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
