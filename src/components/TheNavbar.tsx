import React from 'react'
import type { ProfileMenuList } from '../pages/@types/home'
import * as Icon from 'react-feather'

type NavbarProps = {
	title: string
	profileName: string
	profileImg: string
	profileMenu: ProfileMenuList
}

function TheNavbar({ title, profileName, profileImg, profileMenu }: NavbarProps) {
	const toggleSidebar = () => {
		const sidebar = document.querySelector('#sidebar')
		if (sidebar) sidebar.classList.add('hidden')
		// console.log(document.querySelector('#sidebar'))
	}

	return (
		<nav className="bg-white border-b z-50 fixed flex items-center justify-between lg:justify-start top-0 left-0 right-0 py-3 lg:py-4 px-4">
			<button onClick={() => toggleSidebar()} className="order-1 lg:order-2 focus:outline-none">
				<svg
					className="w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
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
				<div
					v-if="account"
					className="bg-white absolute right-0 border text-left w-52 text-sm rounded-lg transform translate-y-2"
				>
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
	)
}

export default TheNavbar
