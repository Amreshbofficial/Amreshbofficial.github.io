import type { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hoverable?: boolean;
}

/**
 * Enterprise Production Card Component
 * Guarantees correct flex layout, strict padding, and uniform stretching within CSS Grid.
 */
export const Card: React.FC<CardProps> = ({ children, className = '', style, hoverable = false }) => {
  const baseClass = `card flex flex-col ${hoverable ? 'card-hover' : ''} ${className}`.trim();
  
  return (
    <div className={baseClass} style={{ height: '100%', ...style }}>
      {children}
    </div>
  );
};
