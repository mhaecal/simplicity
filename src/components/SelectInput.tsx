import React, { ReactNode } from 'react'
import { ChevronDown } from 'react-feather'

type SelectInputProps = {
  children: ReactNode
  onChange?: () => any
}

function SelectInput({ children, onChange }: SelectInputProps) {
  return (
    <div className="relative inline-block w-full">
      <select
        className="w-full h-10 pl-3 pr-6 bg-white border border-gray-300 rounded appearance-none focus:ring focus:ring-blue-300  focus:shadow-outline"
        placeholder="Regular input"
        onChange={onChange}
      >
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ChevronDown size={18} />
      </div>
    </div>
  )
}

export default SelectInput
