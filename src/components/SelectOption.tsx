import React, { ReactElement } from 'react'

type SelectOptionProps = {
  value?: string | number
  children: string
}

function SelectOption({ value, children }: SelectOptionProps) {
  return <option value={value ? value : children}>{children}</option>
}

export default SelectOption
