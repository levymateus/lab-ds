import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum'
  },
  argTypes: {
    size: {
      options: ['lg', 'xl', '2xl'],
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
      control: false
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj = {
  args: {
    size: 'lg'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'xl'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    size: '2xl',
    as: 'p',
    children: 'Lorem ipsum'
  }
}
