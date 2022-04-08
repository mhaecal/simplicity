import React, { ReactElement } from 'react'
import classNames from 'classnames'

type CardProps = {
  children: ReactElement | string
  className?: string
}

function Card({ children, className }: CardProps) {
  return (
    <div className={classNames('bg-white lg:p-4 rounded', className, { 'p-3': !className })}>
      {children}
    </div>
  )
}

export default Card
