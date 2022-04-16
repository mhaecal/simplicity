import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '../components/Input'
import Label from '../components/Label'
import Box from '../components/Box'

export default {
  title: 'Components/Input',
  component: Input,
  subcomponents: { Label },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Base = Template.bind({})
Base.args = {
  placeholder: 'Type here..',
}

export const WithLabel: ComponentStory<typeof Input> = (args) => (
  <Box>
    <Label title="Input with Label" />
    <Input placeholder="Type here..." />
  </Box>
)
