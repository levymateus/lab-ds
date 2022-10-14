import { Meta, StoryObj } from '@storybook/react'
import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    name: 'checkbox-name',
    children: 'Lorem ipsum',
  },
  argTypes: {},
} as Meta<CheckboxProps>

export const Default: StoryObj = {
  args: {
    name: 'checkbox-name',
    children: 'Lore ipsum'
  }
}
