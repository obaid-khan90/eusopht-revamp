interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  /** color theme — defaults to the secondary (teal) accent */
  variant?: 'secondary' | 'accent';
}

export default function Badge({ children, className = '', variant = 'secondary' }: BadgeProps) {
  const tone =
    variant === 'accent'
      ? 'bg-accent-light text-accent'
      : 'bg-secondary-light text-secondary';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${tone} ${className}`}
    >
      {children}
    </span>
  );
}
