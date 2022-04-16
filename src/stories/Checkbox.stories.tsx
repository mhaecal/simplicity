import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from '../components/Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Base = Template.bind({})
Base.args = {
  label: 'Lorem ipsum dolor sit amet.',
}
