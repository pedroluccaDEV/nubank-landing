import React, { useEffect, useState } from 'react'

interface Props {
  dark: boolean
  toggleDark: () => void
}

const NAV_LINKS = ['Conta', 'Cartão', 'Investimentos', 'Segurança']

export default function Navbar({ dark, toggleDark }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        background: scrolled
          ? dark
            ? 'rgba(13,13,18,0.92)'
            : 'rgba(255,255,255,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
        <span
          style={{
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: '-0.3px',
            color: 'var(--text)',
          }}
        >
          nubank
        </span>
      </div>

      {/* Center links */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {NAV_LINKS.map((item) => (
          <NavLink key={item} label={item} />
        ))}
      </div>

      {/* Right actions */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button
          onClick={toggleDark}
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '6px 10px',
            cursor: 'pointer',
            fontSize: 15,
            color: 'var(--text-2)',
            transition: 'border-color 0.2s',
          }}
          aria-label="Toggle dark mode"
        >
          {dark ? '☀️' : '🌙'}
        </button>
        <a
          href="#"
          style={{
            color: 'var(--text-2)',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 500,
            padding: '8px 14px',
          }}
        >
          Entrar
        </a>
        <a
          href="#"
          style={{
            background: 'var(--gradient)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 700,
            padding: '9px 20px',
            borderRadius: 10,
            transition: 'opacity 0.2s, transform 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'
            ;(e.currentTarget as HTMLAnchorElement).style.transform =
              'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.opacity = '1'
            ;(e.currentTarget as HTMLAnchorElement).style.transform =
              'translateY(0)'
          }}
        >
          Criar conta
        </a>
      </div>
    </nav>
  )
}

function NavLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      style={{
        color: hovered ? 'var(--nu)' : 'var(--text-2)',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 500,
        transition: 'color 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}
