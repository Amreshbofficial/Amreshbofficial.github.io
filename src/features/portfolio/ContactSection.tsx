import { Section } from '../../components/layout/Section';
import { Card } from '../../components/ui/Card';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <p className="card-body" style={{ maxWidth: '600px' }}>
          Ready to transform your ideas into scalable digital products? Get in touch and let's start the conversation.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
          <Card hoverable style={{ height: '100%' }}>
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="card-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="card-title-sm">Email</h3>
              <a href="mailto:amreshbaskar@gmail.com" className="card-body" style={{ color: 'var(--color-text-primary)' }}>amreshbaskar@gmail.com</a>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
          <Card hoverable style={{ height: '100%' }}>
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="card-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <h3 className="card-title-sm">LinkedIn</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/amresh-baskar-830350325" target="_blank" rel="noopener noreferrer" className="card-body hover:text-white">Amresh Baskar</a>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};
