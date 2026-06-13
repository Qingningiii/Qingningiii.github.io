import type { ReactNode } from 'react';
import { cn } from '../../utils';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={cn('card', className)}>
      {children}
    </div>
  );
}
