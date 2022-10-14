import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Typography } from '../typings'

export type TextProps = {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  as?: Typography
}

export default function Text({ size = 'md', children, as = 'span' }: TextProps) {
  const Text = as ? as : Slot

  return <Text className={clsx('text-gray-100 font-sans', {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg'
  })}>{children}</Text>
}
