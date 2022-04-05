import React, { MouseEvent } from 'react'
import * as Icon from 'react-feather'
import type { MenuList } from './@types/MainLayout'

type SidebarProps = {
  menu: MenuList
  sidebarIsOpen: boolean
}

function TheSidebar({ menu, sidebarIsOpen }: SidebarProps) {
  const toggleDropdown = (e: MouseEvent) => {
    const dropdownItems = e.currentTarget.nextElementSibling
    const dropdownArrow = e.currentTarget.lastElementChild
    if (dropdownItems && dropdownArrow) {
      dropdownItems.classList.toggle('max-h-96')
      // dropdownItems.classList.toggle('overflow-y-auto')
      dropdownArrow.classList.toggle('rotate-90') // arrow
    }
  }

  return (
    <>
      {/*:class="{'transform w-0 lg:w-60 lg:px-4': !open, 'transform w-60 px-4 lg:w-20 hover:w-60': open}"*/}
      <aside
        className={
          !sidebarIsOpen
            ? 'group sidebar lg:w-60 lg:px-4'
            : 'group sidebar w-60 px-4 lg:w-20 hover:w-60'
        }
      >
        <ul>
          {menu.map((menuItem, index) => (
            <li key={index} className={menuItem.dropdown && 'relative'}>
              {/*:class="{ 'w-52': !open, 'w-52 lg:w-auto': open }"*/}
              <button
                onClick={(e) => menuItem.dropdown && toggleDropdown(e)}
                className={menuItem.dropdown ? 'nav-link pr-7' : 'nav-link nav-link-active'}
              >
                <Icon.Home />
                {/*:class="{ 'lg:hidden group-hover:block': open }"*/}
                <span className={sidebarIsOpen ? 'lg:hidden group-hover:block' : ''}>
                  {menuItem.name}
                </span>
                {menuItem.dropdown && (
                  <Icon.ChevronRight
                    className={
                      !sidebarIsOpen
                        ? 'transform duration-300 absolute right-1'
                        : 'transform duration-300 absolute right-1 lg:hidden group-hover:block'
                    }
                  />
                )}
              </button>
              {menuItem.dropdown && (
                <ul
                  className={
                    !sidebarIsOpen ? 'dropdown-items' : 'dropdown-items lg:hidden group-hover:block'
                  }
                >
                  {menuItem.dropdown.map((dropdown, index) => (
                    <li key={index}>
                      <a href="#">{dropdown.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default TheSidebar
