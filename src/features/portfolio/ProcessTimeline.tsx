import { Section } from '../../components/layout/Section';
import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Discovery', description: 'Understanding business requirements.' },
  { step: '02', title: 'Planning', description: 'Architecture and roadmap creation.' },
  { step: '03', title: 'Development', description: 'Building scalable solutions.' },
  { step: '04', title: 'Testing', description: 'Quality assurance and optimization.' },
  { step: '05', title: 'Deployment', description: 'Production release and monitoring.' },
  { step: '06', title: 'Support', description: 'Continuous maintenance and updates.' }
];

export const ProcessTimeline = () => {
  return (
    <Section id="process">
      <div className="section-header">
        <h2 className="section-title">How I Work</h2>
        <p className="card-body" style={{ maxWidth: '600px' }}>
          A structured engineering process to guarantee quality delivery from day one.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px 24px; /* 48px vertical, 24px horizontal */
          padding: 20px 0;
        }

        .process-step {
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* The horizontal wire */
        .process-step::before {
          content: '';
          position: absolute;
          top: 24px; /* Center of the 48px circle */
          left: 50%; /* Start exactly from center of current circle */
          width: calc(100% + 24px); /* Span exact distance to center of next circle */
          height: 2px;
          background: rgba(88, 166, 255, 0.2);
          z-index: 0;
        }

        /* Desktop: 3 columns */
        @media (min-width: 1025px) {
          .process-step:nth-child(3n)::before {
            display: none; /* Hide wire for the last item in a row */
          }
        }

        /* Tablet: 2 columns */
        @media (max-width: 1024px) and (min-width: 769px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .process-step:nth-child(2n)::before {
            display: none; /* Hide wire for the last item in a row */
          }
        }

        /* Mobile: 1 column with vertical wire */
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .process-step::before {
            top: 48px; /* Start below the circle */
            left: calc(50% - 1px); /* Center minus half wire width */
            width: 2px;
            height: calc(100% + 32px - 48px); /* Span to next circle vertically */
          }
          .process-step:last-child::before {
            display: none;
          }
        }

        .process-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-bg-base);
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          margin: 0 auto 20px auto;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 15px rgba(88, 166, 255, 0.15);
          transition: all 0.3s ease;
        }

        .process-step:hover .process-circle {
          background: rgba(88, 166, 255, 0.1);
          transform: scale(1.1);
        }
        
        .process-content {
          max-width: 280px;
          position: relative;
          z-index: 1;
        }

        /* Mobile specific adjustments to hide line behind text */
        @media (max-width: 768px) {
          .process-content {
            background-color: var(--color-bg-base);
            padding: 12px 16px;
            border-radius: 8px;
            margin-top: -8px; /* Pull up slightly to cover the line nicely */
          }
        }
      `}} />

      <motion.div 
        className="process-grid"
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
        {steps.map((item, index) => (
          <motion.div 
            key={index}
            className="process-step"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { type: 'spring', damping: 20, stiffness: 100 } 
              }
            }}
          >
            <div className="process-circle">
              {item.step}
            </div>
            
            <div className="process-content">
              <h3 className="card-title" style={{ fontSize: '20px', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p className="card-body" style={{ fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
