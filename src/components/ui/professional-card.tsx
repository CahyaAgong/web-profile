import React from 'react';

interface ProfessionalCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ProfessionalCard({ 
  children, 
  className = '',
  style = {},
}: ProfessionalCardProps) {
  return (
    <div 
      className={`rounded-2xl p-6 ${className}`}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        ...style,
      }}
    >
      {children}
    </div>
  );
}