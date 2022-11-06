import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import { useStateValue } from '../../context/StateProvider'
const Help = () => {
  const [{ theme, user }, dispatch] = useStateValue()
    const router = useRouter()
    
    useEffect(() => {
		if (!user) {
			router.push('/')
		}
	}, [])
  return (
    <div className={`w-screen h-screen ${
        theme === 'dark'
            ? 'bg-[#111] text-white'
            : 'bg-gray-100 text-black'
          }`}>
          <div className='w-full h-full flex  max-h-screen'>
					<SideNav />
					<section className='flex-1'>
						<Header title='Help' />
					</section>
				</div>
    </div>
  )
}

export default Help