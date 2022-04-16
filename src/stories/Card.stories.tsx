import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from '../components/Card'

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    children: {
      description: '`ReactNode` `string`',
    },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <p>Lorem ipsum dolor sit amet.</p>
  </Card>
)

export const Base = Template.bind({})
Base.args = {
  title: 'This is Title',
}
