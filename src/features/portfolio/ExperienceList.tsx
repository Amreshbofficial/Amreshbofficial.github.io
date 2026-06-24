import { Section } from '../../components/layout/Section';
import { Card } from '../../components/ui/Card';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Founder',
    company: 'Pearl Cloud Solutions',
    period: '2026 – Present',
    responsibilities: [
      'Building SaaS products',
      'Developing cloud-based solutions',
      'Delivering web and mobile applications',
      'Providing business automation services'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Vhilv Technology Private Limited',
    period: '2025 – 2026',
    responsibilities: [
      'Developed full-stack web applications',
      'Built responsive business websites',
      'Implemented SEO strategies',
      'Worked on frontend and backend development'
    ]
  },
  {
    role: 'Data Processing Associate',
    company: 'JB Infotech Software & QA Services',
    period: '2021 – 2024',
    responsibilities: [
      'Data processing and quality verification',
      'Team training and support'
    ]
  }
];

export const ExperienceList = () => {
  return (
    <Section id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .exp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      <motion.div 
        className="exp-grid"
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
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            style={{ height: '100%' }}
          >
            <Card hoverable style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg-surface)', border: index === 0 ? '1px solid rgba(88, 166, 255, 0.3)' : '1px solid var(--color-border)' }}>
              <div className="flex-1 flex flex-col">
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                    <h3 className="card-title" style={{ margin: 0, fontSize: '20px', lineHeight: 1.3 }}>
                      {exp.role}
                    </h3>
                    <div className="badge" style={{ backgroundColor: index === 0 ? 'rgba(88, 166, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)', color: index === 0 ? 'var(--color-primary)' : 'var(--color-text-secondary)', border: index === 0 ? '1px solid rgba(88, 166, 255, 0.2)' : 'none', padding: '4px 10px', fontSize: '12px', whiteSpace: 'nowrap' }}>
                      {exp.period}
                    </div>
                  </div>
                  
                  <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span>{exp.company}</span>
                    {index === 0 && (
                      <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(39, 201, 63, 0.1)', color: '#27c93f', border: '1px solid rgba(39, 201, 63, 0.2)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                        Current
                      </span>
                    )}
                  </div>
                </div>
                
                <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '0 -32px 20px -32px' }} />
                
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: index === 0 ? 'var(--color-primary)' : 'var(--color-text-secondary)', marginTop: '2px', fontSize: '16px', lineHeight: 1 }}>▹</span>
                      <span className="card-body" style={{ margin: 0, fontSize: '14px', lineHeight: 1.6 }}>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
