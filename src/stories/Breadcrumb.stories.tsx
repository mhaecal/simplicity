import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Breadcrumb from '../components/Breadcrumb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />

export const Base = Template.bind({})

Base.args = {
  data: ['Home', 'Test', 'Current'],
}
