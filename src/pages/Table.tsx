import React, { MutableRefObject, useEffect, useRef } from 'react'
import Box from '../components/Box'
import { Grid } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'

function Table() {
  const gridTable = useRef(null)

  const grid = new Grid({
    columns: ['Pokemon', 'URL'],
    pagination: {
      enabled: true,
      limit: 5,
      server: {
        url: (prev, page, limit) => `${prev}?limit=${limit}&offset=${page * limit}`,
      },
    },
    server: {
      url: 'https://pokeapi.co/api/v2/pokemon',
      then: (data) =>
        data.results.map((pokemon: { name: string; url: string }) => [pokemon.name, pokemon.url]),
      total: (data) => data.count,
    },
    className: {
      container: 'custom-table',
      table: 'w-full',
      th: 'bg-gray-100',
      footer: 'shadow-none rounded',
    },
  })

  useEffect(() => {
    if (gridTable.current !== null) {
      grid.render(gridTable.current)
    }
  })

  return <div ref={gridTable} />
}

export default Table
