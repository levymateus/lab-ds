import { forwardRef, FunctionComponent, InputHTMLAttributes, ReactNode } from 'react'
import { IconProps } from 'phosphor-react'
import { clsx } from 'clsx'

type InputBaseProps = {
  children: ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export type InputIconProps = {
  icon: FunctionComponent<IconProps>
  className?: string
}

function InputBase({ children }: InputBaseProps) {
  return <div className={clsx('flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300')}>{children}</div>
}

InputBase.displayName = 'InputBase'

const InputText = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input
    ref={ref}
    className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-0 leading-6"
    {...props}
  />
})

InputText.displayName = 'InputText'

function InputIcon({ icon, className }: InputIconProps) {
  const Icon = icon
  return <Icon className={clsx("text-gray-400 text-2xl", className)} weight="bold" />
}

InputIcon.displayName = 'InputIcon'

export const Input = {
  Input: InputText,
  Icon: InputIcon
}

export default InputBase
