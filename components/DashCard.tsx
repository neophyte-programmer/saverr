import React from 'react'
import { useStateValue } from '../context/StateProvider'
import { DashCard } from '../utils/types'

const DashCard = ({ text, icon, value, isAlt }: DashCard) => {
    const [{theme}, dispatch] = useStateValue()
  return (
      <div className={`px-3 md:px-8 py-6 w-full md:max-w-[90%]  rounded-2xl flex flex-col-reverse md:flex-row justify-between items-center shadow-sm gap-2
    ${theme === 'dark' && isAlt ? 'bg-green-500' : ''}
    ${theme === 'dark' && !isAlt ? 'bg-[#222]' : ''}
    ${theme !== 'dark' && isAlt ? 'bg-green-500 text-white' : ''}
    ${theme !== 'dark' && !isAlt ? 'bg-[#ddd]' : ''}
    `}>
          <div className='w-full md:w-auto text-center'>
              <p className='font-bold text-xl md:text-2xl'>{value}</p>
              <p className='text-xs'>{text}</p>
          </div>
          <div className='text-2xl md:text-4xl'>
                {icon}
          </div>
    </div>
  )
}

export default DashCard