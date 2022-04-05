export type MenuList = {
  name: string
  icon: string
  path?: string
  dropdown?: {
    name: string
    path: string
  }[]
}[]

export type ProfileMenuList = {
  name: string
  icon: string
  path: string
}[]
