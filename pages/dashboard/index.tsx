import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../context/StateProvider'
import Cookies from 'js-cookie'
import { actionTypes } from '../../context/reducer'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { fetchUser } from '../../utils/fetchLocalStorageData'
import SideNav from '../../components/SideNav'

const Dashboard = () => {
	const [{ theme, user }, dispatch] = useStateValue()
	const router = useRouter()
	const [loading, setLoading] = useState(false)
    const userInfo = fetchUser()
    
  

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

	
	return (
		<div
			className={`w-screen h-screen ${
				theme === 'dark'
					? 'bg-[#111] text-white'
					: 'bg-gray-100 text-black'
			}`}
		>
			{loading ? (
				<div className={`w-full h-full flex flex-col gap-8 items-center justify-center ${
                    theme === 'dark'
                        ? 'bg-[#111] text-white'
                        : 'bg-gray-100 text-black'
                }`}>
					<Loader />
					<p className={`animate-pulse text-2xl sm:text-4xl`}>
						Welcome,{' '}
						<span className='text-green-500'>
							{' '}
							{userInfo['displayName']}{' '}
						</span>
					</p>
				</div>
			) : (
				<div className='w-full h-full flex  max-h-screen'>
					<SideNav />
					<section className='flex-1'>
						<Header />
					</section>
				</div>
			)}
		</div>
	)
}

export default Dashboard
