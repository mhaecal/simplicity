import React, { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  title?: string
}

function Card({ children, className, title }: CardProps) {
  return (
    <div className="bg-white p-3 lg:p-4 rounded">
      {title && <h1 className="font-bold mb-2">{title}</h1>}
      <div className={className}>{children}</div>
    </div>
  )
}

export default Card
