import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
  /** color theme — defaults to the secondary (teal) accent */
  variant?: 'secondary' | 'accent' | 'outline' | string;
}

export function Badge({ children, className = '', variant = 'secondary', ...props }: BadgeProps) {
  let tone = 'bg-secondary-light text-secondary';
  
  if (variant === 'accent') {
    tone = 'bg-accent-light text-accent';
  } else if (variant === 'outline') {
    tone = 'border border-border text-foreground bg-transparent';
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${tone} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
