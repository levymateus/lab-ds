import { Meta, StoryObj } from '@storybook/react'
import { PaperPlaneRight } from 'phosphor-react'
import Button, { ButtonProps, Icon } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: (<>
      <Icon icon={PaperPlaneRight} />send
    </>)
  },
} as Meta<ButtonProps>

export const Default: StoryObj = {}
