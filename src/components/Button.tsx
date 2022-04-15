import React, { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => any
}

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={'btn focus:shadow-outline hover:bg-gray-50 ' + className}>
      {children}
    </button>
  )
}

export default Button
