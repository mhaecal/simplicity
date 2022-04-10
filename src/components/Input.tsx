import React from 'react'
import classNames from 'classnames'

type InputProps = {
  placeholder?: string
  className?: string
  type?: 'text' | 'password' | 'email'
  onChange?: () => any
}

function Input({ placeholder, className, type = 'text', onChange }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        'w-full relative place-self-end border border-gray-300 h-10 px-3 rounded focus:outline-none focus:ring focus:ring-blue-300',
        className
      )}
      onChange={onChange}
    />
  )
}

export default Input
