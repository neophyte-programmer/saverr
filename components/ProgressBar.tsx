import React from 'react'
import { useStateValue } from '../context/StateProvider'
import { ProgressBar } from '../utils/types'

const ProgressBar = ({ percentage }: ProgressBar) => {
    const [{ theme }] = useStateValue()
    const cleanPercentage = (percentage: number) => {
        const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0 // we can set non-numbers to 0 here
        const isTooHigh = percentage > 100
        return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage
    }
    const pct = cleanPercentage(percentage)
  return (
      <div className={`w-full h-2 ${ theme === 'dark' ? 'bg-[#555]' : 'bg-[#ddd]'} rounded-full relative`}>
          <div className={`h-full  rounded-full
          ${theme === 'dark' ? 'bg-white' : 'bg-green-400' }
          `} style={{ width: `${pct}%` }}>
              
          </div>
    </div>
  )
}

export default ProgressBar