const logos = [
  { src: '/jj.png',          alt: 'JJ' },
  { src: '/viziii.png',      alt: 'Vizii' },
  { src: '/almirah.png',     alt: 'Almirah' },
  { src: '/mensapay.png',    alt: 'Mensa Pay' },
  { src: '/mountsinai.png',  alt: 'Mount Sinai' },
  { src: '/clci.png',        alt: 'CLCI' },
  { src: '/organise.png',    alt: 'OrganAise' },
  { src: '/autosmart1.png',  alt: 'AutoSmart' },
  { src: '/nullship.png',    alt: 'NullShip' },
  { src: '/dbargain.png',    alt: 'DBargain' },
  { src: '/cedarcollege.png',alt: 'Cedar College' },
  { src: '/vital.png',       alt: 'Vital' },
  { src: '/autoflow.png',    alt: 'AutoFlow' },
  { src: '/sloif.png',       alt: 'Sloif' },
  { src: '/aibuddy.png',     alt: 'AiBuddy' },
  { src: '/gulpes.png',      alt: 'Gulpes' },
];

export function LogoCloud() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="group flex flex-col items-center justify-center gap-5 rounded-2xl border border-border bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.alt}
            className="pointer-events-none h-16 w-auto max-w-[140px] select-none object-contain"
          />
          <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            {logo.alt}
          </span>
        </div>
      ))}
    </div>
  );
}
