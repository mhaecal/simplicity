import React, { ReactNode } from 'react'

function InfoCardContainer({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-7 mb-7">{children}</div>
}

export default InfoCardContainer
