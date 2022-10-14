import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Typography } from '../typings'

export type HeadingProps = {
  size?: 'lg' | 'xl' | '2xl'
  children: ReactNode
  as?: Typography
}

export default function Heading({ size = '2xl', children, as = 'span' }: HeadingProps) {
  const Heading = as ? as : Slot

  return <Heading className={clsx("text-gray-100 font-sans font-bold", {
    'text-lg': size === 'lg',
    'text-xl': size === 'xl',
    'text-2xl': size === '2xl'
  })}>{children}</Heading>
}
