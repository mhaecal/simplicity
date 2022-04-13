import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import Card from '../Card'

function PieChart() {
  const [data, setData] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  })

  return (
    <Card>
      <Chart options={data.options} series={data.series} type="pie" width="100%" />
    </Card>
  )
}

export default PieChart
