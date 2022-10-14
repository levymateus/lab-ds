import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

export type HeadingProps = {
  size?: 'lg' | 'xl' | '2xl'
  children: ReactNode
  asChild?: boolean
}

export default function Heading({ size = '2xl', children, asChild = false }: HeadingProps) {
  const Heading = asChild ? Slot : 'span'

  return <Heading className={clsx("text-gray-100 font-sans font-bold", {
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
    'text-2xl': size === '2xl'
  })}>{children}</Heading>
}
