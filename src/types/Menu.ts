import { ReactElement } from 'react'

export type SidebarMenuList = {
  name: string
  icon: ReactElement
  path?: string
  externalUri?: boolean
  dropdown?: {
    name: string
    path: string
    externalUri?: boolean
  }[]
}[]

export type ProfileMenuList = {
  name: string
  icon: ReactElement
  path: string
}[]
