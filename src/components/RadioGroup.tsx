import React, { Children, ReactNode, cloneElement, isValidElement } from 'react'

type RadioGroupProps = {
  children: ReactNode
  name: string
  className?: string
}

function RadioGroup({ children, name, className }: RadioGroupProps) {
  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (isValidElement(child)) {
      return cloneElement(child, { name })
    }
    return child
  })

  return <div className={className}>{childrenWithProps}</div>
}

export default RadioGroup
