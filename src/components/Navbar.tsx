import React, { useEffect, useState } from 'react'

interface Props {
  dark: boolean
  toggleDark: () => void
}

const NAV_LINKS = ['Conta', 'Cartão', 'Investimentos', 'Segurança']

export default function Navbar({ dark, toggleDark }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 769) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navBg = scrolled || menuOpen
    ? dark ? 'rgba(13,13,18,0.96)' : 'rgba(255,255,255,0.96)'
    : 'transparent'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(20px, 5vw, 60px)',
        background: navBg,
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="#820AD1" />
            <path d="M7 14C7 10.134 10.134 7 14 7V21C10.134 21 7 17.866 7 14Z" fill="white" />
            <path d="M21 14C21 17.866 17.866 21 14 21V7C17.866 7 21 10.134 21 14Z" fill="rgba(255,255,255,0.5)" />
          </svg>
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.3px', color: 'var(--text)' }}>nubank</span>
        </a>

        {/* Desktop center links */}
        <div className="hide-mobile" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {NAV_LINKS.map(item => <NavLink key={item} label={item} />)}
        </div>

        {/* Desktop right */}
        <div className="hide-mobile" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <DarkBtn dark={dark} toggle={toggleDark} />
          <a href="#" style={{ color: 'var(--text-2)', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '8px 12px' }}>Entrar</a>
          <CtaLink>Criar conta</CtaLink>
        </div>

        {/* Mobile right */}
        <div className="show-mobile" style={{ display: 'none', alignItems: 'center', gap: 8 }}>
          <DarkBtn dark={dark} toggle={toggleDark} />
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            style={{
              background: 'none', border: '1px solid var(--border)', borderRadius: 8,
              width: 38, height: 38, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 5,
              cursor: 'pointer', padding: 0, transition: 'border-color 0.2s',
            }}
          >
            {/* Animated hamburger lines */}
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: 18,
                height: 1.5,
                background: 'var(--text)',
                borderRadius: 2,
                transition: 'all 0.25s ease',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                    : i === 1 ? 'scaleX(0) opacity(0)'
                    : 'translateY(-6.5px) rotate(-45deg)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(item => (
          <a key={item} href="#" onClick={() => setMenuOpen(false)} style={{
            color: 'var(--text-2)', textDecoration: 'none', fontSize: 16, fontWeight: 500,
            padding: '12px 0', borderBottom: '1px solid var(--border)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--nu)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
          >{item}</a>
        ))}
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <a href="#" style={{
            flex: 1, textAlign: 'center', padding: '12px',
            border: '1.5px solid var(--border)', borderRadius: 10,
            color: 'var(--text)', textDecoration: 'none', fontWeight: 600, fontSize: 14,
          }}>Entrar</a>
          <a href="#" style={{
            flex: 1, textAlign: 'center', padding: '12px',
            background: 'var(--gradient)', borderRadius: 10,
            color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 14,
          }}>Criar conta</a>
        </div>
      </div>
    </>
  )
}

function NavLink({ label }: { label: string }) {
  const [h, setH] = useState(false)
  return (
    <a href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ color: h ? 'var(--nu)' : 'var(--text-2)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
    >{label}</a>
  )
}

function DarkBtn({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <button onClick={toggle} style={{
      background: 'none', border: '1px solid var(--border)', borderRadius: 8,
      padding: '6px 9px', cursor: 'pointer', fontSize: 14, lineHeight: 1,
    }} aria-label="Toggle dark mode">
      {dark ? '☀️' : '🌙'}
    </button>
  )
}

function CtaLink({ children }: { children: React.ReactNode }) {
  const [h, setH] = useState(false)
  return (
    <a href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: 'var(--gradient)', color: '#fff', textDecoration: 'none',
        fontSize: 14, fontWeight: 700, padding: '9px 18px', borderRadius: 10,
        transition: 'opacity 0.2s, transform 0.2s', display: 'inline-block',
        opacity: h ? 0.88 : 1, transform: h ? 'translateY(-1px)' : 'none',
      }}
    >{children}</a>
  )
}
