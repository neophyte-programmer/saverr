import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { BiSave, BiCreditCardAlt } from 'react-icons/bi'
import { BsPower, BsCircleSquare } from 'react-icons/bs'
import { MdDashboard, MdSettings, MdHelp } from 'react-icons/md'

import { FaPowerOff } from 'react-icons/fa'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import { NavItem } from '../utils/types'
import Image from 'next/image'
import ToggleTheme from './ToggleTheme'
import Link from 'next/link'

const SideNav = () => {
	const [userInfo, setUserInfo] = useState(null)
	const [{ theme, user }, dispatch] = useStateValue()
	const router = useRouter()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setUserInfo(user)
		}
	}, [user])

	const logout = () => {
		console.log('logging out...')

		dispatch({
			type: actionTypes.SET_USER,
			user: null,
		})

		if (typeof window !== 'undefined') {
			localStorage.clear()
		}

		Cookies.remove(`${user?.uid}`)
		router.push('/')
	}

	return (
		<nav
			className={`flex flex-col justify-between py-5 px-1 sm:px-3 border-r ${
				theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
			}`}
		>
			<div className='flex flex-col gap-8'>
				<div className='flex items-center  '>
					<div className='flex items-center justify-center w-full text-green-500 text-xl'>
						<BsCircleSquare />
					</div>
				</div>
				<div className='flex flex-col gap-6'>
					<NavItem
						text='dashboard'
						icon={<MdDashboard />}
						path='/dashboard'
					/>
					<NavItem
						text='savings'
						icon={<BiCreditCardAlt />}
						path='/savings'
					/>
					<NavItem
						text='settings'
						icon={<MdSettings />}
						path='/settings'
					/>
					<NavItem
						text='Help'
						icon={<MdHelp />}
						path='/help'
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 items-center'>
				<div className='sm:hidden'>
					<ToggleTheme />
				</div>
				{userInfo && (
					<img
						src={userInfo['photoURL'] || ''}
						alt=''
						className='w-[2rem] h-[2rem] sm:hidden sm:w-10 sm:h-10 rounded-full'
					/>
				)}
				<NavItem text='logout' icon={<FaPowerOff />} onClick={logout} />
			</div>
		</nav>
	)
}

const NavItem = ({ text, icon, path, onClick }: NavItem) => {
	const router = useRouter()
	const [{ theme }] = useStateValue()
	return (
		<>
			{path ? (
				<Link href={path}>
					<div
						onClick={onClick}
						className={`flex items-center flex-col gap-1 cursor-pointer  py-2 px-2 rounded-lg
            ${
				router.pathname === path && theme === 'dark'
					? 'bg-[#222] text-green-500'
					: ''
			}
            ${
				router.pathname === path && theme !== 'dark'
					? 'bg-gray-200 '
					: ''
			}
            `}
					>
						<p className='text-xl sm:text-3xl text-green-500'>
							{icon}
						</p>
						<p className='hidden sm:block capitalize text-xs'>
							{text}
						</p>
					</div>
				</Link>
			) : (
				<div
					onClick={onClick}
					className={`flex items-center flex-col gap-1 cursor-pointer  py-2 px-2 rounded-lg
            ${
				router.pathname === path && theme === 'dark'
					? 'bg-[#222] text-green-500'
					: ''
			}
            ${
				router.pathname === path && theme !== 'dark'
					? 'bg-gray-200 '
					: ''
			}
            `}
				>
					<p className='text-xl sm:text-3xl text-green-500'>{icon}</p>
					<p className='hidden sm:block capitalize text-sm'>{text}</p>
				</div>
			)}
		</>
	)
}

export default SideNav
