import React, { useEffect, useState } from 'react'
import { useInView, useCounter } from '../hooks/useInView'

/* ═══════════════════════════════════════════
   PRODUCTS
═══════════════════════════════════════════ */
const PRODUCTS = [
  { icon: '💳', title: 'Conta Digital',      desc: 'Conta gratuita com rendimento diário acima da poupança.',           accent: '#820AD1' },
  { icon: '💸', title: 'Cartão de Crédito',  desc: 'Controle total do limite e fatura direto pelo app.',                accent: '#0070F3' },
  { icon: '⚡', title: 'Pix Instantâneo',    desc: 'Envie e receba dinheiro 24h por dia, 7 dias por semana. Grátis.',   accent: '#00B894' },
  { icon: '📈', title: 'Investimentos',       desc: 'Invista em renda fixa, criptos e muito mais pelo app.',             accent: '#E17055' },
]

export function Products() {
  const [ref, vis] = useInView()
  return (
    <section className="section">
      <div className="container" ref={ref}>
        <div style={{ marginBottom: 'clamp(36px, 6vw, 56px)' }}>
          <p className={`reveal ${vis ? 'visible' : ''}`} style={{ color: 'var(--nu)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Produtos</p>
          <h2 className={`section-title reveal delay-1 ${vis ? 'visible' : ''}`}>Tudo que você precisa<br />em um só lugar.</h2>
        </div>
        <div className="grid-4">
          {PRODUCTS.map((p, i) => <ProductCard key={i} p={p} delay={i + 1} vis={vis} />)}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ p, delay, vis }: { p: typeof PRODUCTS[0]; delay: number; vis: boolean }) {
  const [h, setH] = useState(false)
  return (
    <div
      className={`card reveal delay-${delay} ${vis ? 'visible' : ''}`}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(20px, 3vw, 32px) clamp(18px, 2.5vw, 28px)',
        cursor: 'pointer', position: 'relative', overflow: 'hidden',
        transform: h ? 'translateY(-4px)' : 'none',
        boxShadow: h ? 'var(--shadow-card)' : 'none',
        borderColor: h ? 'rgba(130,10,209,0.22)' : 'var(--border)',
        transition: 'all 0.28s ease',
      }}>
      <div style={{ position: 'absolute', right: -28, top: -28, width: 80, height: 80, borderRadius: '50%', background: `${p.accent}14`, pointerEvents: 'none' }} />
      <div style={{ fontSize: 'clamp(28px, 4vw, 36px)', marginBottom: 'clamp(14px, 2vw, 20px)' }}>{p.icon}</div>
      <h3 style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>{p.title}</h3>
      <p style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: 'var(--text-2)', lineHeight: 1.65 }}>{p.desc}</p>
      <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 5, color: 'var(--nu)', fontSize: 13, fontWeight: 600 }}>
        Saiba mais
        <svg width="13" height="13" fill="none" viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   APP PREVIEW
═══════════════════════════════════════════ */
type Screen = { label: string; bg: string; content: React.ReactNode }

const SCREENS: Screen[] = [
  {
    label: 'Dashboard', bg: '#820AD1',
    content: (
      <div style={{ padding: '16px 14px', fontFamily: 'DM Sans, sans-serif' }}>
        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, marginBottom: 3 }}>Saldo disponível</div>
        <div style={{ color: '#fff', fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 14 }}>R$ 4.280,50</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 14 }}>
          {[['Pix','⚡'],['Pagar','💳'],['Transferir','↗️'],['Depositar','↙️']].map(([l, ic]) => (
            <div key={l} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 10, padding: '9px', textAlign: 'center' }}>
              <div style={{ fontSize: 15 }}>{ic}</div>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 9.5, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9.5, marginBottom: 6 }}>Últimas transações</div>
        {[['Uber','- R$ 18,90'],['Mercado Livre','- R$ 124,00'],['Salário','+ R$ 5.200,00']].map(([n, v]) => (
          <div key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10 }}>{n}</span>
            <span style={{ color: v.startsWith('+') ? '#38EF7D' : 'rgba(255,255,255,0.55)', fontSize: 10, fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Pix', bg: '#1A1A2E',
    content: (
      <div style={{ padding: '16px 14px' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9.5, marginBottom: 12 }}>Pix · Enviar</div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '12px', marginBottom: 10 }}>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9, marginBottom: 3 }}>Chave Pix</div>
          <div style={{ color: '#fff', fontSize: 11 }}>usuario@email.com</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '12px', marginBottom: 18 }}>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9, marginBottom: 3 }}>Valor</div>
          <div style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>R$ 250,00</div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #820AD1, #A84CFF)', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>⚡ Enviar agora</span>
        </div>
        <div style={{ marginTop: 12, color: 'rgba(255,255,255,0.35)', fontSize: 9, textAlign: 'center' }}>Transferência instantânea · Grátis</div>
      </div>
    ),
  },
  {
    label: 'Invest.', bg: '#0D1117',
    content: (
      <div style={{ padding: '16px 14px' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9.5, marginBottom: 4 }}>Investimentos</div>
        <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 3 }}>R$ 12.440,00</div>
        <div style={{ color: '#38EF7D', fontSize: 10, marginBottom: 14 }}>↑ +3,2% este mês</div>
        {[
          { n: 'Tesouro Direto', v: 'R$ 5.000', p: 40, c: '#A84CFF' },
          { n: 'CDB 120% CDI',   v: 'R$ 4.000', p: 32, c: '#0070F3' },
          { n: 'Bitcoin',        v: 'R$ 3.440', p: 28, c: '#F7931A' },
        ].map(({ n, v, p, c }) => (
          <div key={n} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10 }}>{n}</span>
              <span style={{ color: '#fff', fontSize: 10, fontWeight: 600 }}>{v}</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 4, height: 4 }}>
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
    const t = setInterval(() => setScreen(s => (s + 1) % SCREENS.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="section-alt">
      <div className="container" ref={ref}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* Phone mockup */}
          <div className={`reveal ${vis ? 'visible' : ''}`} style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
            <div style={{ animation: 'phoneFloat 4.5s ease-in-out infinite' }}>
              <div style={{
                width: 'clamp(180px, 30vw, 240px)',
                height: 'clamp(360px, 60vw, 490px)',
                background: '#1A1A1A',
                borderRadius: 40,
                padding: '8px 5px',
                boxShadow: '0 36px 90px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
                position: 'relative',
              }}>
                {/* Notch */}
                <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 52, height: 5, background: '#0A0A0A', borderRadius: 3, zIndex: 10 }} />
                {/* Screen */}
                <div style={{ width: '100%', height: '100%', borderRadius: 34, background: SCREENS[screen].bg, overflow: 'hidden', transition: 'background 0.5s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 14px 2px', color: 'rgba(255,255,255,0.4)', fontSize: 9.5 }}>
                    <span>9:41</span><span>● ● ▮</span>
                  </div>
                  <div style={{ animation: 'slideIn 0.3s ease' }} key={screen}>
                    {SCREENS[screen].content}
                  </div>
                </div>
                <div style={{ position: 'absolute', inset: 0, borderRadius: 40, background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>

          {/* Text */}
          <div style={{ flex: '1 1 260px', minWidth: 0 }}>
            <p className={`reveal ${vis ? 'visible' : ''}`} style={{ color: 'var(--nu)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>App Experience</p>
            <h2 className={`section-title reveal delay-1 ${vis ? 'visible' : ''}`} style={{ marginBottom: 18 }}>
              Tudo no seu <span className="grad-text">controle.</span>
            </h2>
            <p className={`section-subtitle reveal delay-2 ${vis ? 'visible' : ''}`} style={{ marginBottom: 'clamp(24px, 4vw, 40px)', maxWidth: 420 }}>
              O aplicativo do Nubank foi projetado para tornar sua vida financeira simples, transparente e completamente na palma da sua mão.
            </p>
            <div className={`reveal delay-3 ${vis ? 'visible' : ''}`} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {SCREENS.map((s, i) => (
                <button key={i} onClick={() => setScreen(i)} style={{
                  padding: 'clamp(8px, 1.5vw, 10px) clamp(14px, 2.5vw, 20px)',
                  borderRadius: 10, fontSize: 13, fontWeight: 600,
                  border: `1.5px solid ${screen === i ? 'var(--nu)' : 'var(--border)'}`,
                  background: screen === i ? 'rgba(130,10,209,0.08)' : 'transparent',
                  color: screen === i ? 'var(--nu)' : 'var(--text-2)',
                  cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
                }}>{s.label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FEATURES
═══════════════════════════════════════════ */
const FEATURES = [
  { icon: '🔔', title: 'Notificações instantâneas', desc: 'Acompanhe cada transação em tempo real, com alertas inteligentes.' },
  { icon: '🛡️', title: 'Cartão virtual',            desc: 'Mais segurança para compras online com número único por compra.' },
  { icon: '⚡', title: 'Pix integrado',              desc: 'Transferências instantâneas sem custo, a qualquer hora do dia.' },
  { icon: '📊', title: 'Controle de limite',         desc: 'Ajuste e acompanhe seu crédito de forma totalmente flexível.' },
  { icon: '📄', title: 'Pagamentos inteligentes',    desc: 'Pague boletos e contas diretamente pelo app, sem filas.' },
  { icon: '🧠', title: 'Análise de gastos',          desc: 'Visualize seus hábitos financeiros com gráficos e insights.' },
]

export function Features() {
  const [ref, vis] = useInView()
  return (
    <section className="section">
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 6vw, 64px)' }}>
          <h2 className={`section-title reveal ${vis ? 'visible' : ''}`} style={{ marginBottom: 14 }}>Mais controle,<br />menos burocracia.</h2>
          <p className={`section-subtitle reveal delay-1 ${vis ? 'visible' : ''}`} style={{ maxWidth: 420, margin: '0 auto' }}>Ferramentas poderosas para gerenciar seu dinheiro com total liberdade.</p>
        </div>
        <div className="grid-3" style={{ border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden' }}>
          {FEATURES.map((f, i) => <FeatureCell key={i} f={f} delay={(i % 3) + 1} vis={vis} />)}
        </div>
      </div>
    </section>
  )
}

function FeatureCell({ f, delay, vis }: { f: typeof FEATURES[0]; delay: number; vis: boolean }) {
  const [h, setH] = useState(false)
  return (
    <div
      className={`reveal delay-${delay} ${vis ? 'visible' : ''}`}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)',
        background: h ? 'rgba(130,10,209,0.04)' : 'var(--card-bg)',
        border: '1px solid var(--border)',
        transition: 'background 0.22s ease',
      }}>
      <div style={{ fontSize: 'clamp(24px, 3.5vw, 30px)', marginBottom: 12 }}>{f.icon}</div>
      <h3 style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em' }}>{f.title}</h3>
      <p style={{ fontSize: 'clamp(12px, 1.4vw, 14px)', color: 'var(--text-2)', lineHeight: 1.62 }}>{f.desc}</p>
    </div>
  )
}

/* ═══════════════════════════════════════════
   ECOSYSTEM
═══════════════════════════════════════════ */
const ECO = [
  { icon: '💰', title: 'Empréstimos',   desc: 'Crédito personalizado com taxas a partir de 1,75% ao mês.',       tag: 'Novidade' },
  { icon: '🔒', title: 'Seguros',        desc: 'Proteção para vida, residência e mais com coberturas flexíveis.', tag: '' },
  { icon: '₿',  title: 'Criptomoedas',  desc: 'Compre e venda Bitcoin, ETH e outras criptos pelo app.',          tag: 'Beta' },
]

export function Ecosystem() {
  const [ref, vis] = useInView()
  return (
    <section className="section-alt">
      <div className="container" ref={ref}>
        <div style={{ marginBottom: 'clamp(36px, 6vw, 56px)' }}>
          <p className={`reveal ${vis ? 'visible' : ''}`} style={{ color: 'var(--nu)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Ecossistema</p>
          <h2 className={`section-title reveal delay-1 ${vis ? 'visible' : ''}`}>Um banco completo.</h2>
        </div>
        <div className="grid-3">
          {ECO.map((item, i) => <EcoCard key={i} item={item} delay={i + 1} vis={vis} />)}
        </div>
      </div>
    </section>
  )
}

function EcoCard({ item, delay, vis }: { item: typeof ECO[0]; delay: number; vis: boolean }) {
  const [h, setH] = useState(false)
  return (
    <div
      className={`card reveal delay-${delay} ${vis ? 'visible' : ''}`}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)',
        position: 'relative', cursor: 'pointer',
        transform: h ? 'translateY(-4px)' : 'none',
        boxShadow: h ? 'var(--shadow-card)' : 'none',
        transition: 'all 0.28s ease',
      }}>
      {item.tag && (
        <div style={{
          position: 'absolute', top: 18, right: 18,
          background: item.tag === 'Novidade' ? 'var(--gradient)' : 'rgba(130,10,209,0.1)',
          color: item.tag === 'Novidade' ? '#fff' : 'var(--nu)',
          padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700,
        }}>{item.tag}</div>
      )}
      <div style={{ fontSize: 'clamp(30px, 4.5vw, 40px)', marginBottom: 16 }}>{item.icon}</div>
      <h3 style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
      <p style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: 'var(--text-2)', lineHeight: 1.65 }}>{item.desc}</p>
    </div>
  )
}

/* ═══════════════════════════════════════════
   SECURITY
═══════════════════════════════════════════ */
export function Security() {
  const [ref, vis] = useInView()
  const [statsRef, statsVis] = useInView()
  const c1 = useCounter(100, statsVis)
  const c2 = useCounter(99, statsVis)
  const c3 = useCounter(256, statsVis)

  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 60% 40% at 70% 50%, rgba(130,10,209,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" ref={ref} style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-lg)', flexWrap: 'wrap' }}>
          {/* Text */}
          <div style={{ flex: '1 1 260px', minWidth: 0 }}>
            <p className={`reveal ${vis ? 'visible' : ''}`} style={{ color: 'var(--nu-light)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Segurança</p>
            <h2 className={`section-title reveal delay-1 ${vis ? 'visible' : ''}`} style={{ color: '#F0F0F5', marginBottom: 20 }}>
              Segurança em cada <span className="grad-text">transação.</span>
            </h2>
            <p className={`section-subtitle reveal delay-2 ${vis ? 'visible' : ''}`} style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 'clamp(28px, 5vw, 44px)', maxWidth: 400 }}>
              Sua segurança é nossa prioridade. Tecnologia de ponta para proteger cada centavo seu.
            </p>
            <div className={`reveal delay-3 ${vis ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['🔐', 'Criptografia AES-256', 'Dados protegidos com criptografia militar'],
                ['👁️', 'Biometria no app',     'Login com face ID e impressão digital'],
                ['🚫', 'Bloqueio instantâneo', 'Bloqueie seu cartão em segundos pelo app'],
              ].map(([ic, t, d]) => (
                <div key={t as string} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(130,10,209,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flexShrink: 0 }}>{ic}</div>
                  <div>
                    <div style={{ color: '#F0F0F5', fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{t}</div>
                    <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 12 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid-2" style={{ flex: '0 0 auto' }}>
            {[
              { val: c1, suf: 'M+',  label: 'Transações seguras/dia' },
              { val: c2, suf: '%',   label: 'Uptime do sistema' },
              { val: c3, suf: '-bit',label: 'Criptografia de dados' },
              { val: 24, suf: '/7',  label: 'Monitoramento ativo' },
            ].map(({ val, suf, label }, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 'clamp(18px, 3vw, 28px) clamp(16px, 2.5vw, 24px)', minWidth: 'clamp(120px, 18vw, 150px)' }}>
                <div style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 800, color: '#F0F0F5', letterSpacing: '-0.03em', marginBottom: 4 }}>{i === 3 ? 24 : val}{suf}</div>
                <div style={{ fontSize: 'clamp(10px, 1.3vw, 12px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   CTA
═══════════════════════════════════════════ */
export function CTA() {
  const [ref, vis] = useInView()
  return (
    <section className="section">
      <div className="container" ref={ref}>
        <div style={{
          background: 'var(--gradient)', borderRadius: 'clamp(20px, 4vw, 32px)',
          padding: 'clamp(48px, 8vw, 80px) clamp(24px, 6vw, 60px)',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -60, left: '10%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, right: '8%', width: 360, height: 360, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

          <p className={`reveal ${vis ? 'visible' : ''}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16, position: 'relative' }}>Comece agora</p>
          <h2 className={`section-title reveal delay-1 ${vis ? 'visible' : ''}`} style={{ color: '#fff', marginBottom: 18, position: 'relative' }}>Abra sua conta<br />em minutos.</h2>
          <p className={`section-subtitle reveal delay-2 ${vis ? 'visible' : ''}`} style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 440, margin: '0 auto clamp(28px,5vw,44px)', position: 'relative' }}>
            Mais de 100 milhões de clientes já usam o Nubank para simplificar sua vida financeira.
          </p>
          <div className={`reveal delay-3 ${vis ? 'visible' : ''}`} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <CtaWhite>Criar conta gratuita →</CtaWhite>
            <CtaGhost>Ver todos os produtos</CtaGhost>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaWhite({ children }: { children: React.ReactNode }) {
  const [h, setH] = useState(false)
  return (
    <button onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      background: '#fff', color: 'var(--nu)', border: 'none', borderRadius: 12,
      padding: 'clamp(12px, 2vw, 16px) clamp(22px, 4vw, 32px)', fontSize: 'clamp(14px, 2vw, 15px)', fontWeight: 800,
      cursor: 'pointer', boxShadow: h ? '0 14px 40px rgba(0,0,0,0.22)' : '0 8px 28px rgba(0,0,0,0.15)',
      transform: h ? 'translateY(-2px)' : 'none', transition: 'all 0.2s ease', fontFamily: 'inherit',
    }}>{children}</button>
  )
}

function CtaGhost({ children }: { children: React.ReactNode }) {
  const [h, setH] = useState(false)
  return (
    <button onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      background: h ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
      color: '#fff', border: '1.5px solid rgba(255,255,255,0.28)', borderRadius: 12,
      padding: 'clamp(12px, 2vw, 16px) clamp(18px, 3vw, 28px)', fontSize: 'clamp(14px, 2vw, 15px)', fontWeight: 600,
      cursor: 'pointer', transition: 'background 0.2s ease', fontFamily: 'inherit',
    }}>{children}</button>
  )
}

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
const FOOTER_COLS = [
  { title: 'Produtos', links: ['Conta', 'Cartão', 'Investimentos', 'Empréstimos'] },
  { title: 'Empresa',  links: ['Sobre', 'Carreiras', 'Blog', 'Imprensa'] },
  { title: 'Suporte',  links: ['Ajuda', 'Segurança', 'Contato', 'Status'] },
  { title: 'Legal',    links: ['Privacidade', 'Termos', 'Cookies', 'LGPD'] },
]

export function Footer() {
  return (
    <footer style={{ padding: 'clamp(40px, 7vw, 64px) 0 clamp(24px, 4vw, 40px)', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="container">
        {/* Top grid — collapses on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(160px, 25%, 240px) repeat(4, 1fr)',
          gap: 'clamp(24px, 4vw, 40px)',
          marginBottom: 'clamp(36px, 6vw, 56px)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="#820AD1" />
                <path d="M7 14C7 10.134 10.134 7 14 7V21C10.134 21 7 17.866 7 14Z" fill="white" />
                <path d="M21 14C21 17.866 17.866 21 14 21V7C17.866 7 21 10.134 21 14Z" fill="rgba(255,255,255,0.5)" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.3px' }}>nubank</span>
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>O banco digital que liberta. 100M+ de clientes no Brasil e no mundo.</p>
            <div style={{ display: 'flex', gap: 7 }}>
              {['𝕏', '◉', 'in'].map(ic => <SocialIcon key={ic} icon={ic} />)}
            </div>
          </div>

          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 14 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {col.links.map(link => <FLink key={link} label={link} />)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 22, borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ color: 'var(--text-3)', fontSize: 12 }}>© 2025 Nu Pagamentos S.A. · CNPJ 18.236.120/0001-58</p>
          <p style={{ color: 'var(--text-3)', fontSize: 12 }}>Remake por portfólio · product-first design</p>
        </div>
      </div>

      {/* Mobile footer overrides */}
      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > div > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FLink({ label }: { label: string }) {
  const [h, setH] = useState(false)
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ color: h ? 'var(--nu)' : 'var(--text-2)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}>
      {label}
    </a>
  )
}

function SocialIcon({ icon }: { icon: string }) {
  const [h, setH] = useState(false)
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg-alt)', border: `1px solid ${h ? 'var(--nu)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 12, color: h ? 'var(--nu)' : 'var(--text-2)', transition: 'all 0.2s' }}>
      {icon}
    </a>
  )
}
