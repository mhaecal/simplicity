import React, { MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { ChevronRight, Home } from 'react-feather'
import type { SidebarMenuList } from '../types/Menu'

type SidebarProps = {
  menu: SidebarMenuList
  sidebarIsOpen: boolean
}

function TheSidebar({ menu, sidebarIsOpen }: SidebarProps) {
  // classlist
  const className = {
    sidebarContainer: classNames('group sidebar', {
      'lg:w-60 lg:px-4': !sidebarIsOpen,
      'w-60 px-4 lg:w-20 hover:w-60': sidebarIsOpen,
    }),
    menuName: classNames({ 'lg:hidden group-hover:block': sidebarIsOpen }),
    dropdownItems: classNames('dropdown-items', {
      'lg:hidden group-hover:block': sidebarIsOpen,
    }),
    dropdownArrow: classNames('transform duration-300 absolute right-1', {
      'lg:hidden group-hover:block': sidebarIsOpen,
    }),
  }

  // event handler
  const toggleDropdown = (e: MouseEvent) => {
    const dropdownItems = e.currentTarget.nextElementSibling
    const dropdownArrow = e.currentTarget.lastElementChild
    if (dropdownItems && dropdownArrow) {
      dropdownItems.classList.toggle('max-h-96')
      dropdownArrow.classList.toggle('rotate-90') // arrow
    }
  }

  return (
    <aside className={className.sidebarContainer}>
      <ul>
        {menu.map((menuItem, index) => (
          <li key={index} className={menuItem.dropdown && 'relative'}>
            {/*DEFAULT NAV*/}
            {!menuItem.dropdown && menuItem.path && !menuItem.externalUri && (
              <NavLink to={menuItem.path} className="nav-link">
                {menuItem.icon}
                <span className={className.menuName}>{menuItem.name}</span>
              </NavLink>
            )}
            {!menuItem.dropdown && menuItem.externalUri && (
              <a href={menuItem.path} className="nav-link">
                {menuItem.icon}
                <span className={className.menuName}>{menuItem.name}</span>
              </a>
            )}
            {/*DROPDOWN NAV*/}
            {menuItem.dropdown && (
              <React.Fragment>
                <button onClick={(e) => toggleDropdown(e)} className="nav-link pr-7">
                  {menuItem.icon}
                  <span className={className.menuName}>{menuItem.name}</span>
                  <ChevronRight className={className.dropdownArrow} />
                </button>
                <ul className={className.dropdownItems}>
                  {menuItem.dropdown.map((dropdown, index) => (
                    <li key={index}>
                      {dropdown.externalUri ? (
                        <a href={dropdown.path}>{dropdown.name}</a>
                      ) : (
                        <NavLink to={dropdown.path}>{dropdown.name}</NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default TheSidebar
