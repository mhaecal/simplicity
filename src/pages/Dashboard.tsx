import React from 'react'
import * as Icon from 'react-feather'
import InfoCardContainer from '../components/dashboard/InfoCardContainer'
import InfoCard from '../components/dashboard/InfoCard'
import BarChart from '../components/dashboard/BarChart'

function Dashboard() {
  return (
    <>
      <InfoCardContainer>
        <InfoCard title="Income" value="90%" icon={<Icon.Home />} color="blue" />
        <InfoCard title="Orders" value="2,000" icon={<Icon.Calendar />} color="red" />
        <InfoCard title="New User" value="+300" icon={<Icon.Users />} color="green" />
        <InfoCard title="User" value="10,000" icon={<Icon.Camera />} color="lime" />
      </InfoCardContainer>
      <BarChart />
    </>
  )
}

export default Dashboard
