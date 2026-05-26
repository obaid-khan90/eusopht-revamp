import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

const clients = [
  { name: 'Mensa', src: '/mensa.png' },
  { name: 'Guidewire', src: '/guidewire.png' },
  { name: 'MidwifeX', src: '/midwifex.png' },
  { name: 'Canezo', src: '/canezo.png' },
  { name: 'Vizii', src: '/vizii.png' },
  { name: 'AutoSmart', src: '/autosmart.png' },
  { name: 'Null Ship', src: '/null-ship.png' },
  { name: 'Organaise', src: '/organaise.png' },
];

export default function ClientLogoWall() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 items-center justify-items-center">
            {clients.map((c) => (
              <div
                key={c.name}
                className="relative h-10 w-full max-w-[140px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
