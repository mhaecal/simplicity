import React from 'react'
import * as Icon from 'react-feather'
import InfoCardContainer from '../components/dashboard/InfoCardContainer'
import InfoCard from '../components/dashboard/InfoCard'

function Dashboard() {
  return (
    <InfoCardContainer>
      <>
        <InfoCard title="Income" value="90%" icon={<Icon.Home size={20} />} color="blue" />
        <InfoCard title="Orders" value="2,000" icon={<Icon.Calendar size={20} />} color="red" />
        <InfoCard title="New User" value="+300" icon={<Icon.Users size={20} />} color="green" />
        <InfoCard title="User" value="10,000" icon={<Icon.Camera size={20} />} color="yellow" />
      </>
    </InfoCardContainer>
  )
}

export default Dashboard
