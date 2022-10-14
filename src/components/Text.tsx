import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

export type TextProps = {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export default function Text({ size = 'md', children, asChild = false, className }: TextProps) {
  const Text = asChild ? Slot : 'span'

  return <Text className={clsx('text-gray-100 font-sans', {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg'
  }, className)}>{children}</Text>
}
