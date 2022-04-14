import React, { ReactNode } from 'react'

type BoxProps = { children: ReactNode; className?: string }

function Box({ children, className }: BoxProps) {
  return <div className={className}>{children}</div>
}

export default Box
