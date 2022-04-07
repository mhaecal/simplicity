import React from 'react'
import { Outlet } from 'react-router-dom'
import TheNavigation from '../TheNavigation'
import type { MenuList, ProfileMenuList } from '../@types/MainLayout'

const menu: MenuList = [
  { name: 'Dashboard', icon: 'home', path: '/dashboard' },
  {
    name: 'Dropdown',
    icon: 'stack',
    dropdown: [
      { name: 'Dropdown 1', path: '/dropdown-1' },
      { name: 'Dropdown 2', path: '/dropdown-2' },
      { name: 'Dropdown 3', path: '/dropdown-3' },
    ],
  },
]

const profileMenu: ProfileMenuList = [
  { name: 'Profile', icon: 'user', path: '/profile' },
  { name: 'Setting', icon: 'cog', path: '/setting' },
]

function MainLayout() {
  return (
    <>
      <TheNavigation
        title="Simplicity"
        menu={menu}
        profileName="Muhaecal"
        profileImg="https://placekitten.com/100/100"
        profileMenu={profileMenu}
      >
        <Outlet />
      </TheNavigation>
    </>
  )
}

export default MainLayout
