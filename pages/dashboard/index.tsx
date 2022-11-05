import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../context/StateProvider'
import Cookies from 'js-cookie'
import { actionTypes } from '../../context/reducer'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer'

const Dashboard = () => {
	const [{ theme, user }, dispatch] = useStateValue()
	const router = useRouter()
	const [loading, setLoading] = useState(false)

	// Redirect to login page if user is not logged in
	useEffect(() => {
		if (!user) {
			router.push('/')
		}
	}, [])

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])

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
		<div
			className={`w-screen h-screen ${
				theme === 'dark'
					? 'bg-[#111] text-white'
					: 'bg-gray-100 text-black'
			}`}
		>
			{loading ? (
				<div className='w-full h-full flex flex-col gap-8 items-center justify-center'>
					<Loader />
					<p className={`animate-pulse text-4xl`}>
						Welcome,{' '}
						<span className='text-green-500'>
							{' '}
							{user['displayName']}{' '}
						</span>
					</p>
				</div>
			) : (
				<div className='w-full h-full'>
					Click button to logout
                        <Button text='Logout' onClick={logout} />
                        <Footer />
				</div>
			)}
		</div>
	)
}

export default Dashboard
