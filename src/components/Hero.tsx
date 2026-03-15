import React from 'react'
import { useInView } from '../hooks/useInView'
import NubankCard3D from './NubankCard3D'

export default function Hero() {
  const [ref, vis] = useInView(0.05)

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(90px, 14vw, 120px) clamp(20px, 5vw, 80px) clamp(50px, 8vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 'clamp(200px, 40vw, 520px)', height: 'clamp(200px, 40vw, 520px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(130,10,209,0.1) 0%, transparent 70%)', animation: 'orb1 9s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '3%', width: 'clamp(150px, 28vw, 360px)', height: 'clamp(150px, 28vw, 360px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,76,255,0.07) 0%, transparent 70%)', animation: 'orb2 11s ease-in-out infinite', pointerEvents: 'none' }} />
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.022, backgroundImage: 'radial-gradient(circle, var(--text) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(32px, 6vw, 64px)',
          flexWrap: 'wrap',
        }}>
          {/* Left text */}
          <div style={{ flex: '1 1 300px', minWidth: 0 }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(130,10,209,0.07)', border: '1px solid rgba(130,10,209,0.18)',
              borderRadius: 100, padding: '6px 14px', marginBottom: 'clamp(20px, 4vw, 32px)',
              opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(16px)',
              transition: 'all 0.6s ease',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--nu)', animation: 'pulse-ring 2s infinite' }} />
              <span style={{ color: 'var(--nu)', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em' }}>NOVO · Nubank 2025</span>
            </div>

            {/* Title */}
            <h1 className="hero-title" style={{
              marginBottom: 'clamp(16px, 3vw, 24px)',
              opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)',
              transition: 'all 0.7s ease 0.08s',
            }}>
              O banco que<br />
              <span className="grad-text">cabe no seu</span><br />
              bolso.
            </h1>

            {/* Subtitle */}
            <p className="section-subtitle" style={{
              marginBottom: 'clamp(28px, 5vw, 44px)',
              maxWidth: 480,
              opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)',
              transition: 'all 0.7s ease 0.16s',
            }}>
              Conta digital, cartão sem anuidade, Pix, investimentos e controle total do seu dinheiro — tudo em um único aplicativo.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 12, flexWrap: 'wrap',
              opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)',
              transition: 'all 0.7s ease 0.24s',
            }}>
              <button className="btn-primary">Criar conta gratuita →</button>
              <button className="btn-secondary">Conhecer produtos</button>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: 'clamp(24px, 5vw, 44px)', marginTop: 'clamp(36px, 6vw, 56px)',
              flexWrap: 'wrap',
              opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)',
              transition: 'all 0.7s ease 0.32s',
            }}>
              {[['100M+', 'Clientes ativos'], ['5 ★', 'App Store'], ['#1', 'Fintech LatAm']].map(([n, l]) => (
                <div key={n}>
                  <div style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 800, letterSpacing: '-0.02em' }}>{n}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card — hidden on very small, shrinks on tablet */}
          <div style={{
            flex: '0 0 auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(40px)',
            transition: 'all 0.9s ease 0.2s',
            // On mobile it's below the text (flex-wrap) and centered
            width: '100%',
            maxWidth: 'clamp(280px, 55vw, 400px)',
            margin: '0 auto',
          }}>
            <NubankCard3D animate />
          </div>
        </div>
      </div>
    </section>
  )
}
