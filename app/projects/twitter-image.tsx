import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const alt = 'Projects - Virat Mankali';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          color: '#fafafa',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-2px',
            }}
          >
            vm.projects
          </div>
          
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            Snazzl • Cortexa • Styrae • Caricart
          </div>
          
          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Full-stack development, AI/ML, and innovative tech solutions
          </div>
          
          <div
            style={{
              fontSize: 24,
              color: '#fbbf24',
              marginTop: '40px',
              fontWeight: 500,
            }}
          >
            virat.me/projects
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
