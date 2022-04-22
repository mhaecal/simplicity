import React, { useEffect, useRef } from 'react'
import { Grid } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'

type TableProps = any

function Table({ config }: TableProps) {
  const gridTable = useRef(null)
  let grid = new Grid()

  config.className
    ? (grid = new Grid(config))
    : (grid = new Grid(
        Object.assign(config, {
          className: {
            container: 'custom-table',
            table: 'w-full',
            th: 'bg-gray-100',
            footer: 'shadow-none rounded',
          },
        })
      ))

  useEffect(() => {
    gridTable.current && grid.render(gridTable.current)
  })

  return <div ref={gridTable} />
}

export default Table
