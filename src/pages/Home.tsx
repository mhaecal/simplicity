import React from 'react'
import TheSidebar from '../components/TheSidebar'
import TheNavbar from '../components/TheNavbar'
import type { MenuList, ProfileMenuList } from './@types/home'

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

function Home() {
  return (
    <>
      {/*
        title="Simplicity"
        profileName="Muhaecal"
        profileImg="http://www.w3.org/2000-(optional)"
        profileMenu={['Profile', 'Setting']}
      */}
      <TheNavbar
        title="Simplicity"
        profileName="Muhaecal"
        profileImg="https://placekitten.com/100/100"
        profileMenu={profileMenu}
      />
      {/*
        menu={menu}
      */}
      {<TheSidebar menu={menu} />}
    </>
  )
}

export default Home
