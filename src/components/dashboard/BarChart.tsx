import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import Card from '../Card'

function BarChart() {
  const [data, setData] = useState({
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
      colors: ['#38BDF8'],
      fill: {
        opacity: 0.8,
      },
      labels: ['1 Mar', '2 Mar', '3 Mar', '4 Mar', '5 Mar', '6 Mar', '7 Mar', '8 Mar'],
    },
    series: [
      {
        name: 'Visitor',
        data: [25, 40, 45, 60, 76, 60, 70, 91],
      },
    ],
  })

  return (
    <Card title="Visitor">
      <Chart options={data.options} series={data.series} type="bar" width="100%" />
    </Card>
  )
}

export default BarChart
