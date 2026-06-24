import { Section } from '../../components/layout/Section';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const HeroSection = () => {
  return (
    <Section id="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '80px', paddingBottom: '64px' }}>
      <motion.div 
        className="flex flex-col gap-6 items-center" 
        style={{ maxWidth: '800px' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.div variants={itemVariants} className="badge mb-4" style={{ backgroundColor: 'rgba(88, 166, 255, 0.1)', color: 'var(--color-primary)', border: '1px solid rgba(88, 166, 255, 0.2)' }}>
          Founder @ Pearl Cloud Solutions
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title" style={{ fontSize: '72px', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.05em', margin: 0 }}>
          Amresh Baskar
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-muted hero-subtitle" style={{ fontSize: '20px', lineHeight: 1.6, maxWidth: '600px', margin: '16px auto', fontWeight: 400 }}>
          Building SaaS Products, Web Applications, Cloud Solutions & Business Automation to help startups transform ideas into scalable digital products.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex gap-4 justify-center" style={{ marginTop: '32px' }}>
          <a href="#projects" className="btn btn-primary" style={{ padding: '12px 24px' }}>View Projects</a>
          <a href="#contact" className="btn" style={{ padding: '12px 24px' }}>Contact Me</a>
        </motion.div>
        
        <motion.div variants={itemVariants} style={{ marginTop: '32px', borderTop: '1px solid var(--color-border)', paddingTop: '24px', width: '100%' }}>
          <p className="text-muted" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', fontWeight: 600 }}>Core Expertise</p>
          <div className="flex justify-center gap-8 core-expertise" style={{ flexWrap: 'wrap', color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: 500 }}>
            <span>Full Stack Developer</span>
            <span>SaaS Builder</span>
            <span>AWS Cloud Solutions</span>
            <span>DevOps Enthusiast</span>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
