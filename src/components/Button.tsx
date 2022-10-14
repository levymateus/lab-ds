import clsx from "clsx"
import { IconProps } from "phosphor-react"
import { FunctionComponent, ReactNode } from "react"

export type ButtonProps = {
  children: ReactNode
}

export type ButtonIconsProps = {
  icon: FunctionComponent<IconProps>
  className?: string
}

export default function Button({ children }: ButtonProps) {
  return <button className="rounded bg-cyan-500 pl-4 pr-4 pt-3 pb-3 text-sm text-black hover:bg-cyan-300 w-full font-semibold	flex align-middle justify-center">{children}</button>
}


export function Icon({ icon, className }: ButtonIconsProps) {
  const Icon = icon
  return <Icon className={clsx(className)} />
}
