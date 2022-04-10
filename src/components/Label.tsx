import React from 'react'

function Label({ title }: { title: string }) {
  return (
    <div className="mb-1">
      <label className="font-extrabold">{title}</label>
    </div>
  )
}

export default Label
