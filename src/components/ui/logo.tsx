
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 text-lg',
    md: 'h-8 text-xl',
    lg: 'h-10 text-3xl'
  };

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      {/* Text logo - clean and crisp */}
      <span className="font-bold tracking-tighter bg-gradient-to-r from-rebuttl-orange via-rebuttl-red to-rebuttl-purple bg-clip-text text-transparent">
        Lumi6
      </span>
    </div>
  );
};

export default Logo;
