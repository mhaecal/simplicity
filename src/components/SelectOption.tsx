import React, { ReactElement } from 'react'

type SelectOptionProps = {
  value?: string | number
  children: string
  selected?: boolean
  disabled?: boolean
}

function SelectOption({ value, children, selected = false, disabled = false }: SelectOptionProps) {
  return (
    <option value={value ? value : children} selected={selected} disabled={disabled}>
      {children}
    </option>
  )
}

export default SelectOption
