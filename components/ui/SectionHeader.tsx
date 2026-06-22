import { Badge } from "./Badge";

interface SectionHeaderProps {
  overline?: string;
  headline: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  overline,
  headline,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {overline && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <Badge>{overline}</Badge>
        </div>
      )}
      <h2
        className="font-display text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {headline}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed text-text-secondary max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
