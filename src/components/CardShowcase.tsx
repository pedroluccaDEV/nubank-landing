import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'
import NubankCard3D, { CardVariant } from './NubankCard3D'

interface CardInfo { variant: CardVariant; name: string; desc: string }

const CARDS: CardInfo[] = [
  { variant: 'classic',     name: 'Nubank Clássico', desc: 'O cartão que democratizou o crédito no Brasil. Sem anuidade, para sempre.' },
  { variant: 'virtual',     name: 'Cartão Virtual',  desc: 'Segurança máxima para compras online. Número único por transação.' },
  { variant: 'ultraviolet', name: 'Ultravioleta',    desc: 'A experiência premium do Nubank com benefícios exclusivos e cashback.' },
]

export default function CardShowcase() {
  const [ref, vis] = useInView()
  const [active, setActive] = useState(0)

  return (
    <section className="section-alt">
      <div className="container" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 7vw, 72px)' }}>
          <h2 className={`section-title reveal ${vis ? 'visible' : ''}`} style={{ marginBottom: 16 }}>
            O cartão que <span className="grad-text">mudou o jeito</span><br />de usar crédito.
          </h2>
          <p className={`section-subtitle reveal delay-1 ${vis ? 'visible' : ''}`} style={{ maxWidth: 480, margin: '0 auto' }}>
            Sem anuidade. Controle total pelo app. Limite dinâmico e notificações em tempo real.
          </p>
        </div>

        {/* Responsive layout: row on desktop, column on mobile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(24px, 6vw, 72px)',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {/* Stacked cards */}
          <div className={`reveal ${vis ? 'visible' : ''}`} style={{
            position: 'relative',
            width: 'clamp(280px, 55vw, 400px)',
            height: 'clamp(200px, 35vw, 290px)',
            flexShrink: 0,
          }}>
            {CARDS.map((c, i) => (
              <div key={i} onClick={() => setActive(i)} style={{
                position: i === 0 ? 'relative' : 'absolute',
                top:  i === 1 ? 16 : i === 2 ? 32 : 0,
                left: i === 1 ? 16 : i === 2 ? 32 : 0,
                zIndex: active === i ? 10 : 3 - i,
                cursor: 'pointer',
                transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: active === i ? 'scale(1.04) translateY(-8px)' : 'scale(1)',
              }}>
                <NubankCard3D variant={c.variant} />
              </div>
            ))}
          </div>

          {/* Info list */}
          <div className={`reveal delay-2 ${vis ? 'visible' : ''}`} style={{ flex: '1 1 260px', minWidth: 0, maxWidth: 360 }}>
            {CARDS.map((c, i) => (
              <div key={i} onClick={() => setActive(i)} style={{
                padding: 'clamp(14px, 2.5vw, 20px) clamp(16px, 3vw, 24px)',
                borderRadius: 14,
                marginBottom: 10,
                border: `1.5px solid ${active === i ? 'var(--nu)' : 'var(--border)'}`,
                background: active === i ? 'rgba(130,10,209,0.05)' : 'var(--card-bg)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: active === i ? 'var(--nu)' : 'var(--text)' }}>{c.name}</div>
                <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.55 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
