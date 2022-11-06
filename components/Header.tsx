import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import { fetchUser } from '../utils/fetchLocalStorageData'
import ToggleTheme from './ToggleTheme'

const Header = () => {
	const [{ theme, user }, dispatch] = useStateValue()
	const router = useRouter()

	const [userInfo, setUserInfo] = useState<any>(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setUserInfo(user)
		}
	}, [user])

	const firstName = userInfo?.displayName?.split(' ')[0]

	return (
		<header className='w-full flex justify-between items-center px-8 py-3 '>
			<div className='text-sm sm:text-lg'>
				Hello, <span className='text-green-500'>{firstName || ''}</span>
			</div>
			<div className='flex items-center gap-4'>
				<div className='hidden sm:block'>
					<img
						src={userInfo?.photoURL || ''}
						alt=''
						className='w-10 h-10 rounded-full'
					/>
				</div>
				<div className='hidden sm:block'>
					<ToggleTheme />
				</div>
			</div>
		</header>
	)
}

export default Header
