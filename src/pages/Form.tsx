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

function Form() {
  return (
    <>
      <Breadcrumb data={['Home', 'Form']} />
      <Card className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 items-end">
        <Box>
          <Label title="Input with label" />
          <Input placeholder="Username" />
        </Box>
        <Box>
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
          <Label title="Simple select input" />
          <SelectInput>
            <SelectOption value={1}>One</SelectOption>
            <SelectOption value="Two">Two</SelectOption>
            <SelectOption>Three</SelectOption>
          </SelectInput>
        </Box>
        <Box className="md:col-span-2 self-center grid md:grid-cols-4 gap-1">
          <RadioGroup name="radio1" className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-1">
            <RadioItem label="Default radio" value="" />
            <RadioItem label="Default radio coba" value={2} checked />
            <RadioItem label="Default radio coba" value={2} disabled />
          </RadioGroup>
          <RadioGroup name="radio2" className="md:col-span-1">
            <RadioItem label="Default radio coba" value={2} disabled checked />
          </RadioGroup>
        </Box>
        <Button className="w-full">Default button</Button>
        {/*
        title
        select category
        multiple select tag
        radio
        checkbox
        ckeditor
      */}
      </Card>
    </>
  )
}

export default Form
