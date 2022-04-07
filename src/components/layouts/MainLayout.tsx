import React from 'react'
import { Outlet } from 'react-router-dom'
import TheNavigation from '../TheNavigation'
import type { MenuList, ProfileMenuList } from '../@types/MainLayout'

const menu: MenuList = [
  { name: 'Dashboard', icon: 'home', path: '/' },
  {
    name: 'Components',
    icon: 'stack',
    dropdown: [
      { name: 'Button', path: '/components/button' },
      { name: 'Dropdown 2', path: '/dropdown-2' },
    ],
  },
]

const profileMenu: ProfileMenuList = [
  { name: 'Profile', icon: 'user', path: '/profile' },
  { name: 'Setting', icon: 'cog', path: '/setting' },
]

function MainLayout() {
  return (
    <TheNavigation
      title="Simplicity"
      menu={menu}
      profileName="Muhaecal"
      profileImg="https://placekitten.com/100/100"
      profileMenu={profileMenu}
    >
      <Outlet />
    </TheNavigation>
  )
}

export default MainLayout
