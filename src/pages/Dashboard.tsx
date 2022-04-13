import React from 'react'
import * as Icon from 'react-feather'
import InfoCardContainer from '../components/dashboard/InfoCardContainer'
import InfoCard from '../components/dashboard/InfoCard'
import BarChart from '../components/dashboard/BarChart'
import PieChart from '../components/dashboard/PieChart'
import Box from '../components/Box'
import Breadcrumb from '../components/Breadcrumb'

function Dashboard() {
  return (
    <>
      <Breadcrumb data={['Home', 'Admin', 'Dashboard']} />
      <InfoCardContainer>
        <InfoCard title="Income" value="90%" icon={<Icon.Home />} color="blue" />
        <InfoCard title="Orders" value="2,000" icon={<Icon.Calendar />} color="red" />
        <InfoCard title="New User" value="+300" icon={<Icon.Users />} color="green" />
        <InfoCard title="User" value="10,000" icon={<Icon.Camera />} color="lime" />
      </InfoCardContainer>
      <Box className="grid md:grid-cols-2 gap-5 md:gap-2 lg:gap-7">
        <BarChart />
        <PieChart />
      </Box>
    </>
  )
}

export default Dashboard
