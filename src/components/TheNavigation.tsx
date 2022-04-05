import React, { useState } from 'react'
import * as Icon from 'react-feather'
import TheSidebar from './TheSidebar'
import type { MenuList, ProfileMenuList } from './@types/MainLayout'

type Props = {
  menu: MenuList
  title: string
  profileName: string
  profileImg: string
  profileMenu: ProfileMenuList
}

function TheNavigation({ title, menu, profileName, profileImg, profileMenu }: Props) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false)

  return (
    <>
      {/*NAVBAR*/}
      <nav className="bg-white border-b z-50 fixed flex items-center justify-between lg:justify-start top-0 left-0 right-0 py-3 lg:py-4 px-4">
        <button
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          className="order-1 lg:order-2 focus:outline-none"
        >
          {!sidebarIsOpen ? (
            <Icon.Menu />
          ) : (
            <>
              <Icon.ChevronRight className="hidden lg:block" />
              <Icon.X className="block lg:hidden" />
            </>
          )}
        </button>
        <a
          className="text-xl lg:w-56 order-2 lg:order-1 font-semibold tracking-widest uppercase"
          href="index.html"
        >
          {title}
        </a>
        <button className="order-last relative lg:absolute lg:right-5 focus:outline-none">
          <span className="hidden lg:inline-block pr-2 font-semibold text-sm text-gray-600">
            {profileName}
          </span>
          <img src={profileImg} className="w-9 h-9 rounded-full border inline-block" />
          <div className="hidden bg-white absolute right-0 border text-left w-52 text-sm rounded-lg transform translate-y-2">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-100 bg-gray-100 text-gray-500 font-semibold">
                Account
              </li>
              {profileMenu.map((menu, index) => (
                <li key={index} className="py-2 px-4 hover:bg-gray-100">
                  <a href="#" className="flex items-center space-x-1">
                    <span>{menu.name}</span>
                  </a>
                </li>
              ))}
              <li className="py-2 px-4 hover:bg-gray-100 border-t">Logout</li>
            </ul>
          </div>
        </button>
      </nav>
      {/*SIDEBAR*/}
      <TheSidebar menu={menu} sidebarIsOpen={sidebarIsOpen} />
      {sidebarIsOpen && (
        <div
          onClick={() => setSidebarIsOpen(false)}
          className="bg-gray-400 w-screen md:w-0 fixed h-screen md:h-0 z-30 top-0 bg-opacity-50 transform duration-300"
        ></div>
      )}
    </>
  )
}

export default TheNavigation
