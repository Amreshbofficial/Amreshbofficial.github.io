import { Section } from '../../components/layout/Section';
import { Card } from '../../components/ui/Card';
import pearlLogo from '../../assets/pearl_logo_trans.png';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'center' }}>
        
        {/* About Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>About Me</h2>
          <div className="flex flex-col gap-4">
            <p className="card-body" style={{ color: 'var(--color-text-primary)' }}>
              I am Amresh Baskar, a Full-Stack Engineer and the founder of Pearl Cloud Solutions based in Thanjavur, Tamil Nadu.
            </p>
            <p className="card-body">
              I specialize in building end-to-end SaaS platforms, high-performance web applications, and robust cloud infrastructure. My focus is on writing clean, maintainable code and architecting systems that solve real business problems at scale.
            </p>
          </div>
        </motion.div>

        {/* About Pearl Cloud Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Card>
            <div className="flex-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px' }}>
                   <img src={pearlLogo} alt="Pearl Cloud Solutions" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.1)' }} />
                </div>
                <h2 className="card-title" style={{ margin: 0 }}>
                  Pearl Cloud Solutions
                </h2>
              </div>
              <p className="card-body">
                A technology startup focused on SaaS product development, web applications, cloud solutions, and business automation services.
              </p>
              
              <div className="flex gap-4 mt-8">
                <div className="flex flex-col gap-2">
                  <span style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>10+</span>
                  <span className="card-title-sm" style={{ margin: 0 }}>Projects</span>
                </div>
                <div style={{ width: '1px', backgroundColor: 'var(--color-border)' }}></div>
                <div className="flex flex-col gap-2">
                  <span style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>100%</span>
                  <span className="card-title-sm" style={{ margin: 0 }}>Delivery</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </Section>
  );
};
