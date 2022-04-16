import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Base = Template.bind({})
Base.args = {
  children: 'Base Button',
}

export const Custom = Template.bind({})
Custom.args = {
  children: 'Custom Button',
  className: 'bg-red-500 text-white border-0 hover:bg-red-600',
}
