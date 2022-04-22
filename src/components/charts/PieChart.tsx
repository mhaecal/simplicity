import React from 'react'
import Chart from 'react-apexcharts'
import Card from '../Card'

function PieChart() {
  const chart = {
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      theme: {
        palette: 'palette4', // up to pallete10
      },
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
  }

  return (
    <Card>
      <Chart options={chart.options} series={chart.series} type="pie" width="100%" />
    </Card>
  )
}

export default PieChart
