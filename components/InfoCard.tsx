import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { InfoCard } from '../utils/types'
import { BsArrowRight } from 'react-icons/bs'

const InfoCard = ({ text, isAlt, path, image, isExternal }: InfoCard) => {
	return (
		<div className='relative h-[250px] w-[250px]    lg:h-[320px] lg:w-[300px] overflow-hidden lg:rounded-[3rem] rounded-3xl shadow-md'>
			<div className='relative h-full w-full'>
				<Image
					src={image}
					alt=''
					className='h-full w-full object-cover'
				/>
			</div>
			<div
				className={`absolute bottom-0 z-50 rounded-3xl lg:rounded-[3rem] py-8 sm:py-5 px-6 md:px-8 h-1/2  ${
					isAlt
						? 'right-0 bg-green-500 text-white'
						: 'left-0 bg-white text-black'
				} max-w-[80%] flex flex-col items-start justify-center gap-2`}
			>
				<p className='text-sm sm:text-md'>{text}</p>
                {isExternal ? (
                    
					<a href={path} target='_blank' className={`${isAlt ? 'bg-[#111]' : 'bg-green-500'} text-white mr-auto p-2 rounded-lg w-max`}>
						<BsArrowRight className='text-xl' />
					</a>
				) : (
					<Link href={path}>
						<div className={`${isAlt ? 'bg-[#111]' : 'bg-green-500'} text-white mr-auto p-2 rounded-lg w-max`}>
							<BsArrowRight className='text-lg sm:text-xl' />
						</div>
					</Link>
				)}
			</div>
		</div>
	)
}

export default InfoCard
