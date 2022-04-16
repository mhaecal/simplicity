import React from 'react'

function Label({ title, className }: { title: string; className?: string }) {
  return (
    <div className={'mb-1.5 ' + className}>
      <label className="font-bold text-gray-500">{title}</label>
    </div>
  )
}

export default Label
