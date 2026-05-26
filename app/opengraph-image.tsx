import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Eusopht — AI Software & Automation Agency';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0F172A 0%, #1D4ED8 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#93c5fd',
            marginBottom: 24,
          }}
        >
          eusopht
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          AI Software & Automation Agency
        </div>
        <div style={{ fontSize: 30, color: 'rgba(255,255,255,0.8)', marginTop: 28, maxWidth: 800 }}>
          AI · Automation · Staff Augmentation · Custom Software
        </div>
      </div>
    ),
    { ...size }
  );
}
