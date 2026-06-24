import type { ReactNode, CSSProperties } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '', style }) => {
  return (
    <section id={id} className={`section ${className}`} style={style}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};
