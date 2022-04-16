import React from 'react'
import classNames from 'classnames'

type InputProps = {
  placeholder?: string
  className?: string
  type?: 'text' | 'password' | 'email'
  onChange?: () => any
  error?: string
}

function Input({ placeholder, className, type = 'text', onChange, error }: InputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={classNames(
          'w-full relative place-self-end border border-gray-300 h-10 px-3 rounded focus:outline-none focus:ring focus:ring-blue-300',
          className,
          { 'border-red-400 focus:ring-red-100': error }
        )}
        onChange={onChange}
      />
      {error && (
        <span className="text-xs text-red-700" id="passwordHelp">
          {error}
        </span>
      )}
    </>
  )
}

export default Input
