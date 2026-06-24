import { useState } from 'react';
import { Section } from '../../components/layout/Section';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'SaaS development, websites, web apps, mobile apps, AWS cloud solutions, DevOps, and automation.'
  },
  {
    question: 'Do you work with startups?',
    answer: 'Yes, startups and growing businesses.'
  },
  {
    question: 'Do you provide maintenance?',
    answer: 'Yes, ongoing support and maintenance services are available.'
  }
];

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="card-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Everything you need to know about my services and process.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              style={{ 
                border: isOpen ? '1px solid rgba(88, 166, 255, 0.5)' : '1px solid var(--color-border)', 
                borderRadius: '12px', 
                backgroundColor: isOpen ? 'rgba(88, 166, 255, 0.03)' : 'var(--color-bg-surface)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button 
                onClick={() => toggle(index)}
                style={{ 
                  width: '100%', 
                  padding: '20px 24px', 
                  textAlign: 'left', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  color: isOpen ? 'var(--color-primary)' : 'var(--color-text-primary)',
                  fontWeight: 600,
                  fontSize: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'color 0.2s ease'
                }}
              >
                {faq.question}
                <motion.div 
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    color: isOpen ? 'var(--color-primary)' : 'var(--color-text-secondary)', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'rgba(88, 166, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div style={{ padding: '0 24px 24px', color: 'var(--color-text-secondary)', lineHeight: 1.6, fontSize: '15px' }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="card text-muted flex items-center justify-center" style={{ fontStyle: 'italic', padding: '64px 32px', textAlign: 'center', background: 'transparent' }}>
        <p style={{ fontSize: '18px', maxWidth: '600px', fontWeight: 400 }}>
          "Client testimonials will be added soon."
        </p>
      </div>
    </Section>
  );
};
