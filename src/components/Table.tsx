import React, { MutableRefObject, useEffect, useRef } from 'react'
import Box from '../components/Box'
import { Grid } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'

type TableProps = any

function Table({ config }: TableProps) {
  const gridTable = useRef(null)

  const grid = new Grid(
    Object.assign(config, {
      className: {
        container: 'custom-table',
        table: 'w-full',
        th: 'bg-gray-100',
        footer: 'shadow-none rounded',
      },
    })
  )

  useEffect(() => {
    gridTable.current && grid.render(gridTable.current)
  })

  return <div ref={gridTable} />
}

export default Table
