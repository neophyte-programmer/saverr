import Head from 'next/head'
import NotLoggedIn from '../components/NotLoggedIn'
import ToggleTheme from '../components/ToggleTheme'
import { useStateValue } from '../context/StateProvider'
import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import { useRouter } from 'next/router'

export default function Home() {
	const [{ user, theme }] = useStateValue()
	const [loading, setLoading] = useState(false)
	const [welcomeLoading, setWelcomeLoading] = useState(false)
	const [endUser, setEndUser] = useState(null)
	const router = useRouter()

	useEffect(() => {
		setLoading(true)
		setEndUser(user)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])

	useEffect(() => {
		setWelcomeLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 8000)
		if (user) {
			router.push('/dashboard')
		}
	}, [user])

	return (
		<div
			className={`w-screen h-screen ${
				theme === 'dark'
					? 'bg-[#111] text-white'
					: 'bg-gray-100 text-black'
			}`}
		>
			<Head>
				<title>Saverr</title>
			</Head>
			<main className={`w-full h-full`}>
				{loading ? (
					<div className='w-screen h-screen flex items-center justify-center'>
						<Loader />
					</div>
				) : (
					<div className='w-full h-full '>
						{endUser !== null ? (
							<section className='w-full h-full'>
								{welcomeLoading ? (
									<div className='w-full h-full flex flex-col gap-8 items-center justify-center'>
										<Loader />
										<p className={`animate-pulse text-4xl`}>
											Welcome,{' '}
											<span className='text-green-500'>
												{' '}
												{endUser['displayName']}{' '}
											</span>
										</p>
									</div>
								) : (
									<div>Loaded</div>
								)}
							</section>
						) : (
							<NotLoggedIn />
						)}
					</div>
				)}
			</main>
		</div>
	)
}
