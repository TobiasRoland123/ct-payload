// src/components/Sprite/index.tsx
import React, { JSX } from 'react'
import {
  HiUser,
  HiFire,
  HiCurrencyDollar,
  HiHeart,
  HiStar,
  HiQuestionMarkCircle,
} from 'react-icons/hi'

export const SpriteTypes = ['player', 'enemy', 'coin', 'heart', 'star']

export type SpriteProps = {
  sprite: 'player' | 'enemy' | 'coin' | 'heart' | 'star'
  size?: number
  className?: string
}

export function Sprite({ sprite, size = 24, className }: SpriteProps): JSX.Element {
  switch (sprite) {
    case 'player':
      return <HiUser size={size} className={className} />
    case 'enemy':
      return <HiFire size={size} className={className} />
    case 'coin':
      return <HiCurrencyDollar size={size} className={className} />
    case 'heart':
      return <HiHeart size={size} className={className} />
    case 'star':
      return <HiStar size={size} className={className} />
    default:
      return <HiQuestionMarkCircle size={size} className={className} />
  }
}
