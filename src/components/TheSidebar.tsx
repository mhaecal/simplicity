import React, { MouseEvent } from 'react'
import type { MenuList } from '../pages/@types/home'
import * as Icon from 'react-feather'

type SidebarProps = {
  menu: MenuList
}

function TheSidebar({ menu }: SidebarProps) {
  const toggleDropdown = (e: MouseEvent) => {
    const dropdownItems = e.currentTarget.nextElementSibling
    const dropdownArrow = e.currentTarget.lastElementChild
    if (dropdownItems && dropdownArrow) {
      dropdownItems.classList.toggle('max-h-screen')
      dropdownItems.classList.toggle('overflow-y-auto')
      dropdownArrow.classList.toggle('rotate-90')
    }
  }

  return (
    <>
      {/*:class="{'transform w-0 lg:w-60 lg:px-4': !open, 'transform w-60 px-4 lg:w-20 hover:w-60': open}"*/}
      <nav
        id="sidebar"
        className="transform w-0 lg:w-60 lg:px-4 group bg-gray-800 origin-left duration-300 h-screen fixed top-0 left-0 z-40 pt-20 overflow-x-hidden"
      >
        <ul>
          {menu.map((menuItem, index) => (
            <li key={index} className={menuItem.dropdown && 'relative'}>
              {/*:class="{ 'w-52': !open, 'w-52 lg:w-auto': open }"*/}
              <button
                onClick={(e) => menuItem.dropdown && toggleDropdown(e)}
                className={menuItem.dropdown ? 'nav-link pr-7' : 'nav-link nav-link-active'}
              >
                {/*:class="{ 'lg:hidden group-hover:block': open }"*/}
                <Icon.Home />
                <span className="">{menuItem.name}</span>
                {/*className="transform duration-300 absolute right-1 w-0.5 h-0.5 arrow"*/}
                {menuItem.dropdown && (
                  <Icon.ChevronRight className="transform duration-300 absolute right-1" />
                )}
              </button>
              {menuItem.dropdown && (
                <ul className="dropdown-items">
                  {menuItem.dropdown.map((dropdown, index) => (
                    <li key={index}>
                      <a href="#">{dropdown.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {/*dropdown menu*/}
          <li className="dropdown relative">
            {/*:class="{ 'w-52': !open, 'w-52 lg:w-auto': open }"*/}
            <a className="w-52 nav-link text-gray-200" href="#">
              {/*:class="{ 'lg:hidden group-hover:block': open }"*/}
              <span>Dropdown</span>
              {/*:class="{ 'lg:hidden group-hover:block': open }"*/}
              <svg
                className="transform duration-300 absolute right-1 w-0.5 h-0.5 arrow"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            {/*:class="{ 'lg:hidden group-hover:block': open }"*/}
            <ul className="dropdown-items">
              <li>
                <a href="#">Menu 1</a>
              </li>
              <li>
                <a href="#">Menu 2</a>
              </li>
              <li>
                <a href="#">Menu 3</a>
              </li>
            </ul>
          </li>
          <div className="uppercase text-gray-400 text-xs pt-5 pb-3">Other</div>
          <li>
            {/*:class="{ 'w-52': !open, 'w-52 lg:w-auto': open }"*/}
            <a className="nav-link text-gray-200" href="index.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {/*:class="{ 'lg:hidden group-hover:block': open }"*/}
              <span>Form</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default TheSidebar
