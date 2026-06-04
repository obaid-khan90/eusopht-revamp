'use client';

import Image from 'next/image';

const clients = [
  { name: 'JJ', src: '/jj.png' },
  { name: 'Vizii', src: '/viziii.png' },
  { name: 'Almirah', src: '/almirah.png' },
  { name: 'Mensa Pay', src: '/mensapay.png' },
  { name: 'Mount Sinai', src: '/mountsinai.png' },
  { name: 'CLCI', src: '/clci.png' },
  { name: 'OrganAise', src: '/organise.png' },
  { name: 'AutoSmart', src: '/autosmart1.png' },
  { name: 'NullShip', src: '/nullship.png' },
  { name: 'DBargain', src: '/dbargain.png' },
  { name: 'Cedar College', src: '/cedarcollege.png' },
  { name: 'Vital', src: '/vital.png' },
  { name: 'AutoFlow', src: '/autoflow.png' },
  { name: 'Sloif', src: '/sloif.png' },
  { name: 'AiBuddy', src: '/aibuddy.png' },
];

// 4 columns × 4 rows = 16 cells. Tagline at index 9 (row 3, col 2 — centred).
// 15 logos + 1 tagline = 16 cells — fits perfectly, no padding needed.
const COLS = 4;
const TAGLINE_INDEX = 9;

type Cell =
  | { kind: 'logo'; name: string; src: string }
  | { kind: 'tagline' }
  | { kind: 'empty' };

function buildCells(): Cell[] {
  const logosBefore = clients.slice(0, TAGLINE_INDEX);
  const logosAfter = clients.slice(TAGLINE_INDEX);

  const cells: Cell[] = [
    ...logosBefore.map((c) => ({ kind: 'logo' as const, ...c })),
    { kind: 'tagline' as const },
    ...logosAfter.map((c) => ({ kind: 'logo' as const, ...c })),
  ];

  // Pad to next multiple of COLS
  const remainder = cells.length % COLS;
  if (remainder !== 0) {
    const padding = COLS - remainder;
    for (let i = 0; i < padding; i++) cells.push({ kind: 'empty' });
  }
  return cells;
}

const cells = buildCells();
const TOTAL = cells.length;

export default function ClientsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border">
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
          >
            {cells.map((cell, i) => {
              const row = Math.floor(i / COLS);
              const col = i % COLS;
              const totalRows = Math.ceil(TOTAL / COLS);
              const isLastRow = row === totalRows - 1;
              const isLastCol = col === COLS - 1;

              const dividers = [
                !isLastRow ? 'border-b' : '',
                !isLastCol ? 'border-r' : '',
                'border-border',
              ].join(' ');

              if (cell.kind === 'tagline') {
                return (
                  <div key="tagline" className={`flex flex-col items-center justify-center gap-4 px-5 py-10 text-center ${dividers}`}>
                    <p className="text-base font-bold leading-snug text-text-primary sm:text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                      Trusted by businesses across industries
                    </p>
                    <a href="#contact" className="btn-primary inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold text-white">
                      Get In Touch »
                    </a>
                  </div>
                );
              }

              if (cell.kind === 'empty') {
                return <div key={`empty-${i}`} className={dividers} />;
              }

              return (
                <div key={cell.name} className={`group flex h-32 items-center justify-center px-8 py-6 transition-colors hover:bg-bg ${dividers}`}>
                  <div className="relative h-16 w-full">
                    <Image
                      src={cell.src}
                      alt={cell.name}
                      fill
                      sizes="(max-width:640px) 50vw, 25vw"
                      className="object-contain transition-opacity duration-200 group-hover:opacity-90"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
