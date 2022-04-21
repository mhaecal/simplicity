import React from 'react'
import Table from '../components/Table'

function TablePage() {
  // const config = {
  //   columns: ['Pokemon', 'URL'],
  //   pagination: {
  //     enabled: true,
  //     limit: 5,
  //     server: {
  //       url: (prev: number, page: number, limit: number) =>
  //         `${prev}?limit=${limit}&offset=${page * limit}`,
  //     },
  //   },
  //   server: {
  //     url: 'https://pokeapi.co/api/v2/pokemon',
  //     then: (data: { results: { name: string; url: string }[] }) =>
  //       data.results.map((pokemon: { name: string; url: string }) => [pokemon.name, pokemon.url]),
  //     total: (data: { count: number }) => data.count,
  //   },
  // }

  const config = {
    columns: ['Name', 'Email', 'Phone Number'],
    data: [
      ['John', 'john@example.com', '(353) 01 222 3333'],
      ['Mark', 'mark@gmail.com', '(01) 22 888 4444'],
    ],
  }

  return <Table config={config} />
}

export default TablePage
