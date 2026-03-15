import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'
import NubankCard3D, { CardVariant } from './NubankCard3D'

interface CardInfo {
  variant: CardVariant
  name: string
  desc: string
}

const CARDS: CardInfo[] = [
  {
    variant: 'classic',
    name: 'Nubank Clássico',
    desc: 'O cartão que democratizou o crédito no Brasil. Sem anuidade, para sempre.',
  },
  {
    variant: 'virtual',
    name: 'Cartão Virtual',
    desc: 'Segurança máxima para compras online. Número único por transação.',
  },
  {
    variant: 'ultraviolet',
    name: 'Ultravioleta',
    desc: 'A experiência premium do Nubank com benefícios exclusivos e cashback.',
  },
]

export default function CardShowcase() {
  const [ref, vis] = useInView()
  const [active, setActive] = useState(0)

  return (
    <section
      style={{
        padding: '100px 5%',
        background: 'var(--bg-alt)',
        overflow: 'hidden',
      }}
    >
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <h2
            className={`reveal ${vis ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: 16,
            }}
          >
            O cartão que{' '}
            <span
              style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              mudou o jeito
            </span>
            <br />
            de usar crédito.
          </h2>
          <p
            className={`reveal delay-1 ${vis ? 'visible' : ''}`}
            style={{
              color: 'var(--text-2)',
              fontSize: 17,
              maxWidth: 500,
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Sem anuidade. Controle total pelo aplicativo. Limite dinâmico e
            notificações em tempo real.
          </p>
        </div>

        {/* Cards + selector */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 72,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Stacked cards */}
          <div
            className={`reveal ${vis ? 'visible' : ''}`}
            style={{ position: 'relative', width: 400, height: 280 }}
          >
            {CARDS.map((c, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  top: i === 1 ? 20 : i === 2 ? 40 : 0,
                  left: i === 1 ? 20 : i === 2 ? 40 : 0,
                  zIndex: active === i ? 10 : 3 - i,
                  cursor: 'pointer',
                  transition:
                    'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform:
                    active === i
                      ? 'scale(1.04) translateY(-10px)'
                      : 'scale(1)',
                }}
              >
                <NubankCard3D variant={c.variant} />
              </div>
            ))}
          </div>

          {/* Info list */}
          <div
            className={`reveal delay-2 ${vis ? 'visible' : ''}`}
            style={{ flex: 1, minWidth: 260, maxWidth: 360 }}
          >
            {CARDS.map((c, i) => (
              <CardOption
                key={i}
                {...c}
                active={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CardOption({
  name,
  desc,
  active,
  onClick,
}: CardInfo & { active: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '20px 24px',
        borderRadius: 16,
        marginBottom: 12,
        border: `1.5px solid ${active ? 'var(--nu)' : 'var(--border)'}`,
        background: active ? 'rgba(130,10,209,0.05)' : 'var(--card-bg)',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 15,
          marginBottom: 4,
          color: active ? 'var(--nu)' : 'var(--text)',
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.55 }}>
        {desc}
      </div>
    </div>
  )
}
