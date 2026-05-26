'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  { name: 'JJ', src: '/jj.png' },
  { name: 'Vizii', src: '/vizii.png' },
  { name: 'Almirah', src: '/almirah.png' },
  { name: 'Mensa Pay', src: '/mensapay.png' },
  { name: 'Mount Sinai', src: '/mountsinai.png' },
  { name: 'CLCI', src: '/clci.png' },
  { name: 'OrganAise', src: '/organaise.png' },
  { name: 'AutoSmart', src: '/autosmart.png' },
  { name: 'NullShip', src: '/nullship.png' },
  { name: 'DBargain', src: '/dbargain.png' },
  { name: 'Cedar College', src: '/cedarcollege.png' },
  { name: 'Vital', src: '/vital.png' },
  { name: 'AutoFlow', src: '/autoflow.png' },
  { name: 'Sloif', src: '/sloif.png' },
  { name: 'AiBuddy', src: '/aibuddy.png' },
];

export default function ClientsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group flex h-36 items-center justify-center rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-black/8"
            >
              <div className="relative h-full w-full">
                <Image
                  src={c.src}
                  alt={c.name}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
