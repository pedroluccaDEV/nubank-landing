import React, { useEffect, useState } from 'react'
import { useInView, useCounter } from '../hooks/useInView'

/* ════════════════════════════════════════════
   PRODUCTS
════════════════════════════════════════════ */
interface Product {
  icon: string
  title: string
  desc: string
  accent: string
}

const PRODUCTS: Product[] = [
  {
    icon: '💳',
    title: 'Conta Digital',
    desc: 'Conta gratuita com rendimento diário acima da poupança. Seu dinheiro sempre rendendo.',
    accent: '#820AD1',
  },
  {
    icon: '💸',
    title: 'Cartão de Crédito',
    desc: 'Controle total do limite e fatura direto pelo app. Sem surpresas, sem burocracia.',
    accent: '#0070F3',
  },
  {
    icon: '⚡',
    title: 'Pix Instantâneo',
    desc: 'Envie e receba dinheiro 24h por dia, 7 dias por semana. Grátis e instantâneo.',
    accent: '#00B894',
  },
  {
    icon: '📈',
    title: 'Investimentos',
    desc: 'Invista em renda fixa, criptomoedas e muito mais diretamente pelo aplicativo.',
    accent: '#E17055',
  },
]

export function Products() {
  const [ref, vis] = useInView()

  return (
    <section style={{ padding: '100px 5%' }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <p
            className={`reveal ${vis ? 'visible' : ''}`}
            style={{
              color: 'var(--nu)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Produtos
          </p>
          <h2
            className={`reveal delay-1 ${vis ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            Tudo que você precisa
            <br />
            em um só lugar.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {PRODUCTS.map((p, i) => (
            <ProductCard key={i} product={p} delay={i + 1} visible={vis} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  delay,
  visible,
}: {
  product: Product
  delay: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`reveal delay-${delay} ${visible ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card-bg)',
        borderRadius: 20,
        padding: '32px 28px',
        border: `1px solid ${hovered ? 'rgba(130,10,209,0.25)' : 'var(--border)'}`,
        boxShadow: hovered ? 'var(--shadow-card)' : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: -30,
          top: -30,
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: `${product.accent}12`,
          pointerEvents: 'none',
        }}
      />
      <div style={{ fontSize: 36, marginBottom: 20 }}>{product.icon}</div>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 10,
          letterSpacing: '-0.02em',
        }}
      >
        {product.title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>
        {product.desc}
      </p>
      <div
        style={{
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          color: 'var(--nu)',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        Saiba mais
        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
          <path
            d="M2 7h10M8 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   APP PREVIEW
════════════════════════════════════════════ */
interface AppScreen {
  label: string
  bgColor: string
  content: React.ReactNode
}

const SCREENS: AppScreen[] = [
  {
    label: 'Dashboard',
    bgColor: '#820AD1',
    content: (
      <div style={{ padding: '18px 14px', fontFamily: 'DM Sans, sans-serif' }}>
        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, marginBottom: 3 }}>
          Saldo disponível
        </div>
        <div
          style={{
            color: '#fff',
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: 14,
          }}
        >
          R$ 4.280,50
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8,
            marginBottom: 16,
          }}
        >
          {[['Pix', '⚡'], ['Pagar', '💳'], ['Transferir', '↗️'], ['Depositar', '↙️']].map(
            ([l, ic]) => (
              <div
                key={l}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: 10,
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 16 }}>{ic}</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 10, marginTop: 2 }}>
                  {l}
                </div>
              </div>
            )
          )}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginBottom: 6 }}>
          Últimas transações
        </div>
        {[
          ['Uber', '- R$ 18,90'],
          ['Mercado Livre', '- R$ 124,00'],
          ['Salário', '+ R$ 5.200,00'],
        ].map(([n, v]) => (
          <div
            key={n}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '7px 0',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10 }}>{n}</span>
            <span
              style={{
                color: v.startsWith('+') ? '#38EF7D' : 'rgba(255,255,255,0.55)',
                fontSize: 10,
                fontWeight: 600,
              }}
            >
              {v}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Pix',
    bgColor: '#1A1A2E',
    content: (
      <div style={{ padding: '18px 14px' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, marginBottom: 12 }}>
          Pix · Enviar
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.07)',
            borderRadius: 12,
            padding: '12px',
            marginBottom: 10,
          }}
        >
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9, marginBottom: 3 }}>
            Chave Pix
          </div>
          <div style={{ color: '#fff', fontSize: 11 }}>usuario@email.com</div>
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.07)',
            borderRadius: 12,
            padding: '12px',
            marginBottom: 18,
          }}
        >
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9, marginBottom: 3 }}>
            Valor
          </div>
          <div style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>R$ 250,00</div>
        </div>
        <div
          style={{
            background: 'linear-gradient(135deg, #820AD1, #A84CFF)',
            borderRadius: 12,
            padding: '12px',
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>⚡ Enviar agora</span>
        </div>
        <div
          style={{
            marginTop: 12,
            color: 'rgba(255,255,255,0.35)',
            fontSize: 9,
            textAlign: 'center',
          }}
        >
          Transferência instantânea · Grátis
        </div>
      </div>
    ),
  },
  {
    label: 'Invest.',
    bgColor: '#0D1117',
    content: (
      <div style={{ padding: '18px 14px' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, marginBottom: 4 }}>
          Investimentos
        </div>
        <div
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: 3,
          }}
        >
          R$ 12.440,00
        </div>
        <div style={{ color: '#38EF7D', fontSize: 10, marginBottom: 14 }}>↑ +3,2% este mês</div>
        {[
          { n: 'Tesouro Direto', v: 'R$ 5.000', p: 40, c: '#A84CFF' },
          { n: 'CDB 120% CDI', v: 'R$ 4.000', p: 32, c: '#0070F3' },
          { n: 'Bitcoin', v: 'R$ 3.440', p: 28, c: '#F7931A' },
        ].map(({ n, v, p, c }) => (
          <div key={n} style={{ marginBottom: 12 }}>
            <div
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}
            >
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10 }}>{n}</span>
              <span style={{ color: '#fff', fontSize: 10, fontWeight: 600 }}>{v}</span>
            </div>
            <div
              style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 4, height: 4 }}
            >
              <div style={{ background: c, width: `${p}%`, height: '100%', borderRadius: 4 }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

export function AppPreview() {
  const [ref, vis] = useInView()
  const [screen, setScreen] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setScreen((s) => (s + 1) % SCREENS.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ padding: '100px 5%', background: 'var(--bg-alt)' }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 80,
          flexWrap: 'wrap',
        }}
      >
        {/* Phone */}
        <div
          className={`reveal ${vis ? 'visible' : ''}`}
          style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ animation: 'phoneFloat 4.5s ease-in-out infinite' }}>
            <div
              style={{
                width: 240,
                height: 490,
                background: '#1A1A1A',
                borderRadius: 42,
                padding: '10px 6px',
                boxShadow:
                  '0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(0,0,0,0.5)',
                position: 'relative',
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 58,
                  height: 6,
                  background: '#0A0A0A',
                  borderRadius: 3,
                  zIndex: 10,
                }}
              />
              {/* Screen */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 34,
                  background: SCREENS[screen].bgColor,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'background 0.5s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '16px 16px 4px',
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: 10,
                  }}
                >
                  <span>9:41</span>
                  <span>● ● ▮</span>
                </div>
                <div style={{ animation: 'slideIn 0.35s ease' }} key={screen}>
                  {SCREENS[screen].content}
                </div>
              </div>
              {/* Shine */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 42,
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <p
            className={`reveal ${vis ? 'visible' : ''}`}
            style={{
              color: 'var(--nu)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            App Experience
          </p>
          <h2
            className={`reveal delay-1 ${vis ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: 20,
            }}
          >
            Tudo no seu{' '}
            <span
              style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              controle.
            </span>
          </h2>
          <p
            className={`reveal delay-2 ${vis ? 'visible' : ''}`}
            style={{
              fontSize: 16,
              color: 'var(--text-2)',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 420,
            }}
          >
            O aplicativo do Nubank foi projetado para tornar sua vida financeira
            simples, transparente e completamente na palma da sua mão.
          </p>

          <div
            className={`reveal delay-3 ${vis ? 'visible' : ''}`}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
          >
            {SCREENS.map((s, i) => (
              <button
                key={i}
                onClick={() => setScreen(i)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  border: `1.5px solid ${screen === i ? 'var(--nu)' : 'var(--border)'}`,
                  background: screen === i ? 'rgba(130,10,209,0.08)' : 'transparent',
                  color: screen === i ? 'var(--nu)' : 'var(--text-2)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   FEATURES
════════════════════════════════════════════ */
const FEATURES = [
  { icon: '🔔', title: 'Notificações instantâneas', desc: 'Acompanhe cada transação em tempo real, com alertas inteligentes.' },
  { icon: '🛡️', title: 'Cartão virtual', desc: 'Mais segurança para compras online com número único por compra.' },
  { icon: '⚡', title: 'Pix integrado', desc: 'Transferências instantâneas sem custo, a qualquer hora do dia.' },
  { icon: '📊', title: 'Controle de limite', desc: 'Ajuste e acompanhe seu crédito de forma totalmente flexível.' },
  { icon: '📄', title: 'Pagamentos inteligentes', desc: 'Pague boletos e contas diretamente pelo app, sem filas.' },
  { icon: '🧠', title: 'Análise de gastos', desc: 'Visualize seus hábitos financeiros com gráficos e insights.' },
]

export function Features() {
  const [ref, vis] = useInView()

  return (
    <section style={{ padding: '100px 5%' }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2
            className={`reveal ${vis ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: 16,
            }}
          >
            Mais controle,
            <br />
            menos burocracia.
          </h2>
          <p
            className={`reveal delay-1 ${vis ? 'visible' : ''}`}
            style={{ color: 'var(--text-2)', fontSize: 17, maxWidth: 440, margin: '0 auto' }}
          >
            Ferramentas poderosas para gerenciar seu dinheiro com liberdade total.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 2,
            border: '1px solid var(--border)',
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          {FEATURES.map((f, i) => (
            <FeatureCell key={i} feature={f} delay={(i % 3) + 1} visible={vis} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCell({
  feature,
  delay,
  visible,
}: {
  feature: (typeof FEATURES)[0]
  delay: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`reveal delay-${delay} ${visible ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '36px 32px',
        background: hovered ? 'rgba(130,10,209,0.04)' : 'var(--card-bg)',
        border: '1px solid var(--border)',
        transition: 'background 0.25s ease',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: 30, marginBottom: 14 }}>{feature.icon}</div>
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em' }}>
        {feature.title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>{feature.desc}</p>
    </div>
  )
}

/* ════════════════════════════════════════════
   ECOSYSTEM
════════════════════════════════════════════ */
const ECO_ITEMS = [
  {
    icon: '💰',
    title: 'Empréstimos',
    desc: 'Crédito personalizado com taxas a partir de 1,75% ao mês para cada momento da sua vida.',
    tag: 'Novidade',
  },
  {
    icon: '🔒',
    title: 'Seguros',
    desc: 'Proteção para vida, residência e muito mais com coberturas flexíveis e acessíveis.',
    tag: '',
  },
  {
    icon: '₿',
    title: 'Criptomoedas',
    desc: 'Compre e venda Bitcoin, Ethereum e outras criptos diretamente no app.',
    tag: 'Beta',
  },
]

export function Ecosystem() {
  const [ref, vis] = useInView()

  return (
    <section style={{ padding: '100px 5%', background: 'var(--bg-alt)' }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <p
            className={`reveal ${vis ? 'visible' : ''}`}
            style={{
              color: 'var(--nu)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Ecossistema
          </p>
          <h2
            className={`reveal delay-1 ${vis ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            Um banco completo.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {ECO_ITEMS.map((item, i) => (
            <EcoCard key={i} item={item} delay={i + 1} visible={vis} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EcoCard({
  item,
  delay,
  visible,
}: {
  item: (typeof ECO_ITEMS)[0]
  delay: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`reveal delay-${delay} ${visible ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card-bg)',
        borderRadius: 20,
        padding: '36px 32px',
        border: '1px solid var(--border)',
        position: 'relative',
        boxShadow: hovered ? 'var(--shadow-card)' : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      {item.tag && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background:
              item.tag === 'Novidade' ? 'var(--gradient)' : 'rgba(130,10,209,0.1)',
            color: item.tag === 'Novidade' ? '#fff' : 'var(--nu)',
            padding: '3px 10px',
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          {item.tag}
        </div>
      )}
      <div style={{ fontSize: 40, marginBottom: 20 }}>{item.icon}</div>
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>{item.desc}</p>
    </div>
  )
}

/* ════════════════════════════════════════════
   SECURITY
════════════════════════════════════════════ */
export function Security() {
  const [ref, vis] = useInView()
  const [statsRef, statsVis] = useInView()

  const c1 = useCounter(100, statsVis)
  const c2 = useCounter(99, statsVis)
  const c3 = useCounter(256, statsVis)

  return (
    <section
      style={{
        padding: '100px 5%',
        background: 'var(--bg-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse 60% 40% at 70% 50%, rgba(130,10,209,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 80,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, minWidth: 260 }}>
            <p
              className={`reveal ${vis ? 'visible' : ''}`}
              style={{
                color: 'var(--nu-light)',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Segurança
            </p>
            <h2
              className={`reveal delay-1 ${vis ? 'visible' : ''}`}
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#F0F0F5',
                marginBottom: 24,
              }}
            >
              Segurança em cada{' '}
              <span
                style={{
                  background: 'var(--gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                transação.
              </span>
            </h2>
            <p
              className={`reveal delay-2 ${vis ? 'visible' : ''}`}
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.72,
                marginBottom: 44,
                maxWidth: 400,
              }}
            >
              Sua segurança é nossa prioridade. Utilizamos tecnologia de ponta para
              proteger cada centavo seu.
            </p>

            <div
              className={`reveal delay-3 ${vis ? 'visible' : ''}`}
              style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
            >
              {[
                ['🔐', 'Criptografia AES-256', 'Seus dados protegidos com criptografia militar'],
                ['👁️', 'Biometria no aplicativo', 'Login seguro com face ID e impressão digital'],
                ['🚫', 'Bloqueio instantâneo', 'Bloqueie seu cartão em segundos pelo app'],
              ].map(([ic, t, d]) => (
                <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(130,10,209,0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {ic}
                  </div>
                  <div>
                    <div
                      style={{
                        color: '#F0F0F5',
                        fontWeight: 600,
                        fontSize: 15,
                        marginBottom: 3,
                      }}
                    >
                      {t}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 13 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div
            ref={statsRef}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {[
              { val: c1, suffix: 'M+', label: 'Transações seguras/dia' },
              { val: c2, suffix: '%', label: 'Uptime do sistema' },
              { val: c3, suffix: '-bit', label: 'Criptografia de dados' },
              { val: 24, suffix: '/7', label: 'Monitoramento ativo' },
            ].map(({ val, suffix, label }, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: '28px 24px',
                  minWidth: 148,
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#F0F0F5',
                    letterSpacing: '-0.03em',
                    marginBottom: 4,
                  }}
                >
                  {i === 3 ? 24 : val}
                  {suffix}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.5 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   CTA
════════════════════════════════════════════ */
export function CTA() {
  const [ref, vis] = useInView()

  return (
    <section style={{ padding: '100px 5%' }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          style={{
            background: 'var(--gradient)',
            borderRadius: 32,
            padding: '80px 60px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -60,
              left: '10%',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -80,
              right: '8%',
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              pointerEvents: 'none',
            }}
          />

          <p
            className={`reveal ${vis ? 'visible' : ''}`}
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 18,
              position: 'relative',
            }}
          >
            Comece agora
          </p>
          <h2
            className={`reveal delay-1 ${vis ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.03em',
              marginBottom: 20,
              position: 'relative',
            }}
          >
            Abra sua conta
            <br />
            em minutos.
          </h2>
          <p
            className={`reveal delay-2 ${vis ? 'visible' : ''}`}
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: 17,
              maxWidth: 460,
              margin: '0 auto 44px',
              position: 'relative',
              lineHeight: 1.65,
            }}
          >
            Mais de 100 milhões de clientes já usam o Nubank para simplificar sua vida
            financeira.
          </p>

          <div
            className={`reveal delay-3 ${vis ? 'visible' : ''}`}
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
              position: 'relative',
            }}
          >
            <CTAWhiteBtn>Criar conta gratuita →</CTAWhiteBtn>
            <CTAGhostBtn>Ver todos os produtos</CTAGhostBtn>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTAWhiteBtn({ children }: { children: React.ReactNode }) {
  const [h, setH] = useState(false)
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: '#fff',
        color: 'var(--nu)',
        border: 'none',
        borderRadius: 12,
        padding: '16px 32px',
        fontSize: 15,
        fontWeight: 800,
        cursor: 'pointer',
        boxShadow: h ? '0 14px 40px rgba(0,0,0,0.22)' : '0 8px 30px rgba(0,0,0,0.15)',
        transform: h ? 'translateY(-2px)' : 'none',
        transition: 'all 0.2s ease',
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </button>
  )
}

function CTAGhostBtn({ children }: { children: React.ReactNode }) {
  const [h, setH] = useState(false)
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
        color: '#fff',
        border: '1.5px solid rgba(255,255,255,0.28)',
        borderRadius: 12,
        padding: '16px 28px',
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        transition: 'background 0.2s ease',
      }}
    >
      {children}
    </button>
  )
}

/* ════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════ */
const FOOTER_COLS = [
  { title: 'Produtos', links: ['Conta', 'Cartão', 'Investimentos', 'Empréstimos'] },
  { title: 'Empresa', links: ['Sobre', 'Carreiras', 'Blog', 'Imprensa'] },
  { title: 'Suporte', links: ['Ajuda', 'Segurança', 'Contato', 'Status'] },
  { title: 'Legal', links: ['Privacidade', 'Termos', 'Cookies', 'LGPD'] },
]

export function Footer() {
  return (
    <footer
      style={{
        padding: '64px 5% 40px',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: 40,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="#820AD1" />
                <path
                  d="M7 14C7 10.134 10.134 7 14 7V21C10.134 21 7 17.866 7 14Z"
                  fill="white"
                />
                <path
                  d="M21 14C21 17.866 17.866 21 14 21V7C17.866 7 21 10.134 21 14Z"
                  fill="rgba(255,255,255,0.5)"
                />
              </svg>
              <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.3px' }}>
                nubank
              </span>
            </div>
            <p
              style={{
                color: 'var(--text-2)',
                fontSize: 13,
                lineHeight: 1.7,
                maxWidth: 220,
                marginBottom: 20,
              }}
            >
              O banco digital que liberta. Mais de 100 milhões de clientes no Brasil e no mundo.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {['𝕏', '◉', 'in'].map((ic) => (
                <SocialIcon key={ic} icon={ic} />
              ))}
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 16,
                  letterSpacing: '0.01em',
                }}
              >
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <FooterLink key={link} label={link} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 24,
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ color: 'var(--text-3)', fontSize: 12 }}>
            Este não é um site oficial Nubank
          </p>
          <p style={{ color: 'var(--text-3)', fontSize: 12 }}>
            Remake Landign Page - Pedro Lucca G. de Araujo
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ label }: { label: string }) {
  const [h, setH] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        color: h ? 'var(--nu)' : 'var(--text-2)',
        textDecoration: 'none',
        fontSize: 13,
        transition: 'color 0.2s',
      }}
    >
      {label}
    </a>
  )
}

function SocialIcon({ icon }: { icon: string }) {
  const [h, setH] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: 34,
        height: 34,
        borderRadius: 8,
        background: 'var(--bg-alt)',
        border: `1px solid ${h ? 'var(--nu)' : 'var(--border)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        fontSize: 13,
        color: h ? 'var(--nu)' : 'var(--text-2)',
        transition: 'all 0.2s',
      }}
    >
      {icon}
    </a>
  )
}
