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
import { contribute, document, emptyCart } from '../../images/images'
import Image from 'next/image'
import InfoCard from '../../components/InfoCard'
import SaveCard from '../../components/SaveCard'
import DashCard from '../../components/DashCard'

import { BsCircleSquare, BsUiChecks } from 'react-icons/bs'
import { MdTimer } from 'react-icons/md'

import { dummyTargets } from '../../utils/data'

const Dashboard = () => {
	const [{ theme, user, targets }, dispatch] = useStateValue()
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
				<div
					className={`w-full h-full flex flex-col gap-8 items-center justify-center ${
						theme === 'dark'
							? 'bg-[#111] text-white'
							: 'bg-gray-100 text-black'
					}`}
				>
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
				<div className='w-full h-full flex  max-h-screen max-w-screen  overflow-hidden'>
					<SideNav />
					<section className='flex-1 flex-col pb-4 overflow-y-scroll'>
						<Header />
						<div className='w-full py-4 px-4 md:px-8 '>
							{targets.length <= 0 ? (
								<div className='flex w-full lg:flex-row flex-col gap-8'>
									<div className='flex-1 flex flex-col'>
										<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
											<DashCard
												icon={<BsCircleSquare />}
												text='Total Targets'
												value={10}
												isAlt
											/>
											<DashCard
												icon={<MdTimer />}
												text='Pending Targets'
												value={3}
											/>
											<DashCard
												icon={<BsUiChecks />}
												text='Total Savings'
												value={7}
											/>
										</div>
										<div className='py-4 flex flex-col gap-4'>
											<h1 className='text-green-500 text-xl font-medium '>Your Recent Targets </h1>
											<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
												{dummyTargets
													.slice(0, 4)
													.map((target) => (
                                                        <SaveCard
                                                            data={target}
															key={target.id}
														/>
													))}
											</div>
										</div>
									</div>
									<div className='flex flex-col gap-4'>
										<InfoCard
											text='Want to know about how Saverr works?'
											path='/help'
											image={document}
											isAlt={false}
										/>
										<InfoCard
											text='Want to contribute to Saverr? '
											path='https://github.com/neophyte-programmer/saverr'
											image={contribute}
											isAlt={true}
											isExternal
										/>
									</div>
								</div>
							) : (
								<div className='w-full flex flex-col items-center justify-center gap-12'>
									<div className='flex flex-col gap-6'>
										<p>
											You don't have any targets yet. Add
											a target to get started.
										</p>
										<div className='w-max mx-auto'>
											<Button
												text='Get Started'
												onClick={() => {
													router.push(
														'/savings/addnew'
													)
												}}
											/>
										</div>
									</div>
									<Image
										src={emptyCart}
										alt='empty'
										className='h-[250px] lg:h-[400px] mx-auto'
									/>
								</div>
							)}
						</div>
					</section>
				</div>
			)}
		</div>
	)
}

export default Dashboard
