import React, { useRef, MouseEvent } from 'react'
import { useWindowSize } from '../hooks/useInView'

export type CardVariant = 'classic' | 'virtual' | 'ultraviolet'

interface Props {
  variant?: CardVariant
  animate?: boolean
  style?: React.CSSProperties
}

const GRADIENTS: Record<CardVariant, string> = {
  classic:     'linear-gradient(135deg, #820AD1 0%, #5B0EA6 40%, #3D0870 100%)',
  virtual:     'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
  ultraviolet: 'linear-gradient(135deg, #2D1B69 0%, #11998E 50%, #38EF7D 100%)',
}

const LABELS: Record<CardVariant, string> = {
  classic: 'Nubank',
  virtual: 'Virtual',
  ultraviolet: 'Ultravioleta',
}

export default function NubankCard3D({ variant = 'classic', animate = false, style = {} }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { w } = useWindowSize()

  // Scale card to viewport
  const baseW = w < 400 ? 280 : w < 600 ? 300 : w < 900 ? 320 : 360
  const baseH = Math.round(baseW * 0.622)

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || w < 768) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 26
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 26
    cardRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateZ(12px)`
  }

  const onMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'rotateX(5deg) rotateY(-10deg)'
  }

  const fs = { label: baseW < 300 ? 14 : 18, number: baseW < 300 ? 10 : 14, chip: { w: baseW < 300 ? 32 : 44, h: baseW < 300 ? 22 : 32 } }

  return (
    <div style={{ perspective: 1000, display: 'inline-block', ...style }}>
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          width: baseW,
          height: baseH,
          borderRadius: baseW < 300 ? 14 : 20,
          background: GRADIENTS[variant],
          padding: `${baseH * 0.115}px ${baseW * 0.083}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          transform: 'rotateX(5deg) rotateY(-10deg)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease',
          boxShadow: '0 28px 72px rgba(130,10,209,0.42), 0 8px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.14)',
          cursor: 'pointer',
          animation: animate ? 'float 5s ease-in-out infinite' : undefined,
          userSelect: 'none',
        }}
      >
        {/* Shimmer */}
        <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)', backgroundSize: '200% 100%', animation: 'shimmer 3.5s infinite linear', pointerEvents: 'none' }} />
        {/* Deco circles */}
        <div style={{ position: 'absolute', right: -40, top: -40, width: baseW * 0.44, height: baseW * 0.44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: -20, bottom: -60, width: baseW * 0.36, height: baseW * 0.36, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

        {/* Top */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 700, fontSize: fs.label, letterSpacing: '-0.3px' }}>{LABELS[variant]}</span>
          <svg width={fs.label + 8} height={fs.label + 8} viewBox="0 0 26 26" fill="none">
            <path d="M8 13C8 10.238 10.238 8 13 8" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 13C5 8.582 8.582 5 13 5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 13C2 6.925 6.925 2 13 2" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="13" cy="13" r="2" fill="rgba(255,255,255,0.7)" />
          </svg>
        </div>

        {/* Chip */}
        <div style={{ width: fs.chip.w, height: fs.chip.h, background: 'linear-gradient(135deg, #D4A843, #F0C060, #B8962E)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '60%', height: '40%', border: '1px solid rgba(120,80,20,0.4)', borderRadius: 2 }} />
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: fs.number, letterSpacing: '0.14em', fontFamily: 'DM Mono, monospace' }}>
            •••• •••• •••• 4242
          </span>
          <div style={{ display: 'flex' }}>
            <div style={{ width: fs.label + 12, height: fs.label + 12, borderRadius: '50%', background: '#EB001B', opacity: 0.85 }} />
            <div style={{ width: fs.label + 12, height: fs.label + 12, borderRadius: '50%', background: '#F79E1B', opacity: 0.85, marginLeft: -(fs.label * 0.5) }} />
          </div>
        </div>
      </div>
    </div>
  )
}
