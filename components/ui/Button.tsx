'use client';

import { forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    if (variant === 'primary') {
      return (
        <button
          ref={ref}
          className={`btn-primary inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${sizeStyles[size]} ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    }

    if (variant === 'secondary') {
      return (
        <button
          ref={ref}
          className={`inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white font-semibold text-text-primary transition-all duration-200 hover:bg-accent-light hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${sizeStyles[size]} ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-accent transition-all duration-200 hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
