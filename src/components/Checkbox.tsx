import React from 'react'

type CheckboxProps = {
  label: string
  value?: string | number
  checked?: boolean
  className?: string
  disabled?: boolean
}

function Checkbox({ label, value, checked = false, className, disabled = false }: CheckboxProps) {
  return (
    <label className={'text-gray-700 ' + className}>
      <input type="checkbox" value={value} defaultChecked={checked} disabled={disabled} />
      <span className="ml-1">{label}</span>
    </label>
  )
}

export default Checkbox
