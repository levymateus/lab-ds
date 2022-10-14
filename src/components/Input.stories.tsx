import { Meta, StoryObj } from '@storybook/react'
import { Envelope, Lock, EyeSlash } from 'phosphor-react'
import InputText, { InputProps, Input } from './Input'

export default {
  title: 'Components/Input',
  component: InputText,
  args: {
    children: (
      <>
        <Input.Icon icon={Envelope} />
        <Input.Input placeholder="jhondoe@email.com" type="email" />
      </>
    )
  },
  argTypes: {
    children: {
      control: false
    }
  }
} as Meta<InputProps>

export const Default: StoryObj = {}

export const WhithoutIcon: StoryObj<InputProps> = {
  args: {
    children: (<Input.Input placeholder="jhondoe@email.com" type="email" />)
  }
}

export const IconRight: StoryObj<InputProps> = {
  args: {
    children: (
      <>
        <Input.Icon icon={Lock} />
        <Input.Input placeholder="Password" type="password" />
        <Input.Icon icon={EyeSlash} />
      </>
    )
  }
}
