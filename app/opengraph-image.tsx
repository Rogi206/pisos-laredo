import { ImageResponse } from 'next/og'

export const alt = 'Pisos Laredo | Inmobiliaria en Laredo, Cantabria'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F1C3F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          gap: '20px',
        }}
      >
        {/* Logo badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
          <div style={{ width: 52, height: 52, background: '#3B5BA8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 28, color: 'white' }}>🏠</span>
          </div>
          <span style={{ fontSize: 52, fontWeight: 'bold', color: 'white', letterSpacing: '-1px' }}>
            Pisos Laredo
          </span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '700px' }}>
          Tu inmobiliaria de confianza en Laredo, Cantabria
        </div>

        {/* Location badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(59,91,168,0.3)', border: '1px solid rgba(59,91,168,0.6)', borderRadius: '999px', padding: '8px 20px', marginTop: '8px' }}>
          <span style={{ fontSize: 16, color: '#93B4F0' }}>📍 Laredo, Cantabria</span>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '48px', marginTop: '16px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>20+</span>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>años de experiencia</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>500+</span>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>familias felices</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>100%</span>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>compromiso</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
