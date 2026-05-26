import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  href: string;
  image: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];
  /** Image sizes attribute for responsive loading */
  sizes?: string;
  className?: string;
}

export default function ProjectCard({
  href,
  image,
  title,
  category,
  description,
  tags,
  sizes = '(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw',
  className = '',
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block h-full w-full overflow-hidden rounded-2xl border border-border bg-secondary-dark shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/15 ${className}`}
    >
      {/* Background image with zoom on hover */}
      <Image
        src={image}
        alt={title}
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        {/* Category pill — top */}
        <span className="absolute left-6 top-6 inline-flex items-center rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {category}
        </span>

        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>

          {/* Description — zero-height when hidden so it doesn't create a gap */}
          <div className="grid transition-all duration-300 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-3 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {description}
              </p>
            </div>
          </div>

          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA — revealed on hover, flows naturally below tags */}
          <div className="grid transition-all duration-300 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                View Case Study
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
