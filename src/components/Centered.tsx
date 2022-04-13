import React, { ReactElement } from 'react'

type CenteredProps = {
  children: ReactElement
}

function Centered({ children }: CenteredProps) {
  return <div className="grid place-items-center min-h-screen">{children}</div>
}

export default Centered
