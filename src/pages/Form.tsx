import React from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import Box from '../components/Box'
import Breadcrumb from '../components/Breadcrumb'
import Label from '../components/Label'
import { ChevronDown } from 'react-feather'
import SelectInput from '../components/SelectInput'
import SelectOption from '../components/SelectOption'
import Button from '../components/Button'
import RadioGroup from '../components/RadioGroup'
import RadioItem from '../components/RadioItem'
import Checkbox from '../components/Checkbox'

function Form() {
  return (
    <>
      <Breadcrumb data={['Home', 'Form']} />
      <Card className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
        <Box>
          <Label title="Username" />
          <Input placeholder="Username" />
        </Box>
        <Box>
          <Label title="Password" />
          <Input type="password" placeholder="Password" />
        </Box>
        <Box>
          <Label title="Simple select input" />
          <SelectInput>
            <SelectOption value={1}>One</SelectOption>
            <SelectOption value="Two">Two</SelectOption>
            <SelectOption>Three</SelectOption>
          </SelectInput>
        </Box>
        <Box>
          <Label title="Error input" />
          <Input error="Example error message" />
        </Box>
        <RadioGroup name="radioExample" className="flex flex-col md:flex-row justify-evenly">
          <RadioItem label="Default radio" value="" />
          <RadioItem label="Disabled checked radio" value="disabled" disabled checked />
        </RadioGroup>
        <Box>
          <Checkbox label="Simple checkbox input" />
        </Box>
        <Button>Default button</Button>
        <Button className="bg-blue-500 border-blue-500 text-white hover:bg-blue-600">
          Custom Button
        </Button>
      </Card>
    </>
  )
}

export default Form
