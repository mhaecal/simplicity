import React from 'react'
import classNames from 'classnames'

type BreadcrumbProps = {
  data: string[]
}

function Breadcrumb({ data }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-list mb-4">
      <ul className="flex items-center space-x-2 text-sm">
        {data.map((name, index) => (
          <li
            key={index}
            className={classNames({
              'breadcrumb-item': index > 0,
              active: index == data.length - 1,
            })}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumb
