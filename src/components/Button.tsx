import React from 'react'

type ButtonProps = {
  onClick: () => any
}

function Button({ onClick }: ButtonProps) {
  return (
    <div>
      <button onClick={onClick} className="p-4 border bg-white">
        coba
      </button>
    </div>
  )
}

export default Button
