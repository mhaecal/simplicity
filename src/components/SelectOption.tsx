import React, { ReactElement } from 'react'

type SelectOptionProps = {
  value?: string | number
  children: string
  disabled?: boolean
}

function SelectOption({ value, children, disabled = false }: SelectOptionProps) {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  )
}

export default SelectOption
