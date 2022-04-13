import React, { ReactNode } from 'react'

type BoxProps = { children: ReactNode; className?: string }

function Box({ children, className }: BoxProps) {
  return <>{className ? <div className={className}>{children}</div> : <div>{children}</div>}</>
}

export default Box
