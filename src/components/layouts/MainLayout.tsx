import React from 'react'
import { Outlet } from 'react-router-dom'
import TheNavigation from '../TheNavigation'
import type { MenuList, ProfileMenuList } from '../@types/MainLayout'
import * as Icon from 'react-feather'

const menu: MenuList = [
  { name: 'Dashboard', icon: <Icon.Home />, path: '/' },
  { name: 'Form', icon: <Icon.FileText />, path: '/form' },
  { name: 'Table', icon: <Icon.Layout />, path: '/table' },
  {
    name: 'Authentication',
    icon: <Icon.Lock />,
    dropdown: [
      { name: 'Login', path: '/login' },
      { name: 'Register', path: '/register' },
    ],
  },
  { name: '404 Page', icon: <Icon.XSquare />, path: '/404' },
  {
    name: 'Documentation',
    icon: <Icon.BookOpen />,
    path: 'https://simplicity.netlify.app/docs',
    externalUri: true,
  },
  {
    name: 'Support Us',
    icon: <Icon.Gift />,
    path: 'https://github.com/mhaecal',
    externalUri: true,
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
