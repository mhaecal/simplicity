import React from 'react'

function Label({ title }: { title: string }) {
  return (
    <div className="mb-1.5">
      <label className="font-bold text-gray-500">{title}</label>
    </div>
  )
}

export default Label
