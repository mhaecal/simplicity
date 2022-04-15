import React from 'react'

type LabelProps = {
  className?: string,
  title?: string
}

function Label({ title, className}: LabelProps) {
  return (
    <div className="mb-1.5">
      <label  className={`font-bold text-gray-500 ${className}`}>{title}</label>
    </div>
  )
}

export default Label
