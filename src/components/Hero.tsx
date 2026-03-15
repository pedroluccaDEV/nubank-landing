import React from 'react'
import { useInView } from '../hooks/useInView'
import NubankCard3D from './NubankCard3D'

export default function Hero() {
  const [ref, vis] = useInView(0.05)

  const stat = (n: string, label: string) => (
    <div key={n}>
      <div
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: '-0.02em',
        }}
      >
        {n}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 3 }}>
        {label}
      </div>
    </div>
  )

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 5% 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          right: '6%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(130,10,209,0.11) 0%, transparent 70%)',
          animation: 'orb1 9s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '4%',
          width: 360,
          height: 360,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168,76,255,0.07) 0%, transparent 70%)',
          animation: 'orb2 11s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      {/* Dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.025,
          backgroundImage:
            'radial-gradient(circle, var(--text) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 48,
          flexWrap: 'wrap',
        }}
      >
        {/* Left */}
        <div style={{ flex: 1, minWidth: 300, maxWidth: 560 }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(130,10,209,0.07)',
              border: '1px solid rgba(130,10,209,0.18)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 32,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--nu)',
                animation: 'pulse-ring 2s infinite',
              }}
            />
            <span
              style={{
                color: 'var(--nu)',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              NOVO · Nubank 2026
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(44px, 6vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              marginBottom: 24,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.1s',
            }}
          >
            O banco que
            <br />
            <span
              style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              cabe no seu
            </span>
            <br />
            bolso.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.68,
              color: 'var(--text-2)',
              marginBottom: 44,
              maxWidth: 480,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.2s',
            }}
          >
            Conta digital, cartão sem anuidade, Pix, investimentos e controle
            total do seu dinheiro — tudo em um único aplicativo.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.3s',
            }}
          >
            <PrimaryBtn>Criar conta gratuita →</PrimaryBtn>
            <SecondaryBtn>Conhecer produtos</SecondaryBtn>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 44,
              marginTop: 56,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.4s',
              flexWrap: 'wrap',
            }}
          >
            {stat('100M+', 'Clientes ativos')}
            {stat('5 ★', 'App Store')}
            {stat('#1', 'Fintech LatAm')}
          </div>
        </div>

        {/* Right: card */}
        <div
          style={{
            flex: '0 0 auto',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateX(50px)',
            transition: 'all 0.9s ease 0.25s',
          }}
        >
          <NubankCard3D animate />
        </div>
      </div>
    </section>
  )
}

function PrimaryBtn({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--gradient)',
        color: '#fff',
        border: 'none',
        borderRadius: 12,
        padding: '14px 28px',
        fontSize: 15,
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 12px 50px rgba(130,10,209,0.4)'
          : 'var(--shadow-nu)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.2s ease',
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </button>
  )
}

function SecondaryBtn({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none',
        color: hovered ? 'var(--nu)' : 'var(--text)',
        border: `1.5px solid ${hovered ? 'var(--nu)' : 'var(--border)'}`,
        borderRadius: 12,
        padding: '14px 24px',
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  )
}
