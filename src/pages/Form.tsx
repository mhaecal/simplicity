import React from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import Box from '../components/Box'
import Breadcrumb from '../components/Breadcrumb'
import Label from '../components/Label'
import { ChevronDown } from 'react-feather'
import SelectInput from '../components/SelectInput'
import SelectOption from '../components/SelectOption'

function Form() {
  return (
    <>
      <Breadcrumb data={['Home', 'Form']} />
      <Card className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 items-end">
        <Box>
          <Label title="Label" />
          <Input type="password" placeholder="Input text with label" />
        </Box>
        <Box>
          <SelectInput>
            <SelectOption value={1}>One</SelectOption>
            <SelectOption value="Two">Two</SelectOption>
            <SelectOption>Three</SelectOption>
          </SelectInput>
        </Box>
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
