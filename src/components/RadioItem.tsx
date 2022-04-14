import React, { useState } from 'react'
import classNames from 'classnames'

type RadioItemProps = {
  label: string
  name?: string
  value?: string | number
  className?: string
  checked?: boolean
  disabled?: boolean
}

function RadioItem({
  label,
  name,
  value,
  className,
  checked = false,
  disabled = false,
}: RadioItemProps) {
  return (
    <label className={classNames({ 'text-gray-400': disabled }, className)}>
      <input type="radio" value={value} name={name} defaultChecked={checked} disabled={disabled} />
      <span className="ml-1.5">{label}</span>
    </label>
  )
}

export default RadioItem
