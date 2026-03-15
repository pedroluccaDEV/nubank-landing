import React, { useRef, MouseEvent } from 'react'

export type CardVariant = 'classic' | 'virtual' | 'ultraviolet'

interface Props {
  variant?: CardVariant
  small?: boolean
  style?: React.CSSProperties
  animate?: boolean
}

const GRADIENTS: Record<CardVariant, string> = {
  classic:
    'linear-gradient(135deg, #820AD1 0%, #5B0EA6 40%, #3D0870 100%)',
  virtual:
    'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
  ultraviolet:
    'linear-gradient(135deg, #2D1B69 0%, #11998E 50%, #38EF7D 100%)',
}

const LABELS: Record<CardVariant, string> = {
  classic: 'Nubank',
  virtual: 'Virtual',
  ultraviolet: 'Ultravioleta',
}

export default function NubankCard3D({
  variant = 'classic',
  small = false,
  style = {},
  animate = false,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  const w = small ? 220 : 360
  const h = small ? 136 : 224

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 28
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 28
    cardRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateZ(12px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'rotateX(5deg) rotateY(-10deg)'
  }

  return (
    <div style={{ perspective: 1000, display: 'inline-block', ...style }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: w,
          height: h,
          borderRadius: small ? 12 : 20,
          background: GRADIENTS[variant],
          padding: small ? '14px 18px' : '26px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          transform: 'rotateX(5deg) rotateY(-10deg)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease',
          boxShadow:
            '0 30px 80px rgba(130,10,209,0.45), 0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
          cursor: 'pointer',
          animation: animate ? 'float 5s ease-in-out infinite' : undefined,
        }}
      >
        {/* Shimmer sweep */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background:
              'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3.5s infinite linear',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            right: -40,
            top: -40,
            width: small ? 100 : 160,
            height: small ? 100 : 160,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: -20,
            bottom: -60,
            width: small ? 80 : 140,
            height: small ? 80 : 140,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
            pointerEvents: 'none',
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.92)',
              fontWeight: 700,
              fontSize: small ? 13 : 18,
              letterSpacing: '-0.3px',
            }}
          >
            {LABELS[variant]}
          </span>
          {/* NFC icon */}
          <svg
            width={small ? 18 : 26}
            height={small ? 18 : 26}
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M8 13C8 10.238 10.238 8 13 8"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5 13C5 8.582 8.582 5 13 5"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M2 13C2 6.925 6.925 2 13 2"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="13" cy="13" r="2" fill="rgba(255,255,255,0.7)" />
          </svg>
        </div>

        {/* Chip */}
        <div
          style={{
            width: small ? 30 : 44,
            height: small ? 20 : 32,
            background:
              'linear-gradient(135deg, #D4A843, #F0C060, #B8962E)',
            borderRadius: small ? 4 : 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '60%',
              height: '40%',
              border: '1px solid rgba(120,80,20,0.4)',
              borderRadius: 2,
            }}
          />
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: small ? 10 : 14,
              letterSpacing: '0.15em',
              fontFamily: 'DM Mono, monospace',
            }}
          >
            {small ? '•••• 4242' : '•••• •••• •••• 4242'}
          </span>
          {/* Mastercard */}
          <div style={{ display: 'flex' }}>
            <div
              style={{
                width: small ? 20 : 30,
                height: small ? 20 : 30,
                borderRadius: '50%',
                background: '#EB001B',
                opacity: 0.85,
              }}
            />
            <div
              style={{
                width: small ? 20 : 30,
                height: small ? 20 : 30,
                borderRadius: '50%',
                background: '#F79E1B',
                opacity: 0.85,
                marginLeft: small ? -8 : -12,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
