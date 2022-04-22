import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import Card from '../Card'

function BarChart() {
  const chart = {
    series: [
      {
        name: 'Visitor',
        data: [25, 40, 45, 60, 76, 60, 80],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        parentHeightOffset: 0,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['1 Mar', '2 Mar', '3 Mar', '4 Mar', '5 Mar', '6 Mar', '7 Mar'],
      theme: {
        palette: 'palette3', // up to palette10
      },
    },
  }

  return (
    <Card title="Visitor">
      <Chart options={chart.options} series={chart.series} type="bar" width="100%" />
    </Card>
  )
}

export default BarChart
