'use client';

import { useState } from 'react';

/* Local overrides for icons not available (or trademark-removed) on simpleicons. */
const LOCAL: Record<string, string> = {
  AWS: '/aws.png',
  Azure: '/azure.png',
  'OpenAI GPT': '/openai.png',
  OpenAI: '/openai.png',
  Whisper: '/openai.png',
};

interface TechIconProps {
  name: string;
  /** simpleicons slug */
  icon: string;
  /** brand hex (no #) */
  color: string;
}

export default function TechIcon({ name, icon, color }: TechIconProps) {
  const [failed, setFailed] = useState(false);
  const localSrc = LOCAL[name];
  const src = localSrc ?? `https://cdn.simpleicons.org/${icon}/${color}`;

  if (failed) {
    // Graceful fallback: a colored letter badge
    return (
      <span
        className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-white"
        style={{ backgroundColor: `#${color}` }}
        aria-hidden
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      className="h-5 w-5 object-contain"
      onError={() => setFailed(true)}
    />
  );
}
