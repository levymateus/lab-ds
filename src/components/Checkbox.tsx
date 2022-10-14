import { useState, forwardRef, InputHTMLAttributes } from "react"
import { Check } from "phosphor-react"
import clsx from "clsx"

/**
 * TODO: refatorar para usar o checkbox do @radix-ui/react-checkbox
 */

export type CheckboxBase = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className" | "onChange" | "checked" | "ref" >

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string
}

export default forwardRef<HTMLInputElement, CheckboxProps>(({ children, defaultChecked = false, className, ...props }, ref) => {
  const [checked, setChecked] = useState(defaultChecked)

  function toggle() {
    setChecked(prevState => !prevState)
  }

  return <div className={clsx("flex gap-3 align-middle flex-row w-full select-none hover:cursor-pointer", className)}>
    <div className="bg-gray-800 rounded flex justify-center w-6 h-6" onClick={toggle}>
      {checked ? <Check className="text-cyan-300 self-center" weight="bold" size={20} /> : null}
    </div>
    <input
      ref={ref}
      type="checkbox"
      className="hidden"
      onChange={toggle}
      checked={checked}
      {...props}
    />
    <label onClick={toggle} htmlFor={props.name}>
      <span className="text-gray-200 select-none hover:cursor-pointer text-sm">{children}</span>
    </label>
  </div>
})
