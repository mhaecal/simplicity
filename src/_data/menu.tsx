import React from 'react'
import * as Icon from 'react-feather'
import type { ProfileMenuList, SidebarMenuList } from '../types/Menu'

export const sidebarMenu: SidebarMenuList = [
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

export const profileMenu: ProfileMenuList = [
  { name: 'Profile', icon: <Icon.User />, path: '/profile' },
  { name: 'Setting', icon: <Icon.Settings />, path: '/setting' },
]
