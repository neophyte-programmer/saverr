import React from 'react'
import { Target } from '../utils/types'
import ProgressRing from './ProgressRing'
import { BsCircleSquare } from 'react-icons/bs'
import ProgressBar from './ProgressBar'
import { useStateValue } from '../context/StateProvider'

const SaveCard = ({ data }: { data: Target }) => {
  const [{ theme }] = useStateValue()
  const { title, amount, current, deposits, isComplete } = data
  const percentage = (current / amount) * 100
  

	return (
    <div className={` 
    ${isComplete && theme === 'dark' ? 'bg-green-500' : ''} 
    ${isComplete && theme !== 'dark' ? 'bg-green-500 text-white' : ''} 
    ${!isComplete && theme === 'dark' ? 'bg-[#222] border-2 border-green-800' : ''} 
    ${!isComplete && theme !== 'dark' ? 'bg-[#eee] border-2 border-green-300' : ''} 
    bg-gradient-to-r max-h-[400px] h-full  rounded-lg w-full p-6 flex flex-col gap-4 cursor-pointer`}>
			<div className='w-full flex items-center justify-between '>
        <p className={`font-medium 
          ${isComplete && theme === 'dark' ? 'text-white' : ''} 
          ${isComplete && theme !== 'dark' ? ' text-white' : ''} 
          ${!isComplete && theme === 'dark' ? 'text-green-500' : ''} 
          ${!isComplete && theme !== 'dark' ? 'text-green-600' : ''}
        `}>{title}</p>
				<p className='text-2xl'>
					<BsCircleSquare />
				</p>
      </div>
      <div>
        <p className='text-sm'>Target:</p>
        <p className='text-3xl font-bold'>{amount}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p>Current: {current} </p>
        <p>Progress: {percentage.toFixed(1)}% </p>
      </div>
        <ProgressBar percentage={percentage} />
		</div>
	)
}

export default SaveCard
