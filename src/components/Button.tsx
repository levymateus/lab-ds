import clsx from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return <button
    className={clsx("rounded bg-cyan-500 pl-4 pr-4 pt-3 pb-3 text-sm text-black hover:bg-cyan-300 w-full font-semibold flex align-middle justify-center", className)}
    {...props}
  >{children}</button>
}
