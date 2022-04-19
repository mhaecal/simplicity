import React from 'react'
import { Outlet } from 'react-router-dom'
import TheNavigation from '../TheNavigation'
import { profileMenu, sidebarMenu } from '../../_data/menu'

function MainLayout() {
  const handleLogout = () => {
    // method to handle logout
    console.log('handle logout')
  }

  return (
    <TheNavigation
      title="Simplicity"
      menu={sidebarMenu}
      profileName="Muhaecal"
      profileImg="https://placekitten.com/100/100"
      profileMenu={profileMenu}
      onLogout={() => handleLogout()}
    >
      <Outlet />
    </TheNavigation>
  )
}

export default MainLayout
