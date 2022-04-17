import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectInput from '../components/SelectInput'
import SelectOption from '../components/SelectOption'

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  subcomponents: { SelectOption },
} as ComponentMeta<typeof SelectInput>

export const Base: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args}>
    <SelectOption>One</SelectOption>
    <SelectOption>Two</SelectOption>
    <SelectOption disabled>Three</SelectOption>
  </SelectInput>
)
