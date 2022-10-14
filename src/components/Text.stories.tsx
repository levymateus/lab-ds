import { Meta, StoryObj } from '@storybook/react'
import Text, { TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    as: {
      options: ['h1', 'h2', 'h3', 'p', 'span'],
      control: {
        type: 'select'
      }
    },
    children: {
      control: false,
    }
  }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    as: 'p',
    children: 'Lore Ipsum'
  }
}
