import React from 'react'
import { useStateValue } from '../context/StateProvider'
import { ProgressCircle, ProgressPie, ProgressText } from '../utils/types'

const cleanPercentage = (percentage: number) => {
	const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0 // we can set non-numbers to 0 here
	const isTooHigh = percentage > 100
	return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage
}

const Circle = ({ color, percentage, radius }: ProgressCircle) => {
	const circ = 2 * Math.PI * radius
	const strokePct = ((100 - percentage) * circ) / 100 // where stroke will start, e.g. from 15% to 100%.
	return (
		<circle
			r={radius}
			cx={100}
			cy={100}
			fill='transparent'
			stroke={strokePct !== circ ? color : ''} // remove colour as 0% sets full circumference
			strokeWidth={'0.5rem'}
			strokeDasharray={circ}
			strokeDashoffset={percentage ? strokePct : 0}
		></circle>
	)
}

const Text = ({ percentage }: ProgressText) => {
	return (
		<text
			x='50%'
			y='50%'
			dominantBaseline='central'
			textAnchor='middle'
            fontSize={'1em'}
		>
			{percentage.toFixed(0)}%
		</text>
	)
}

const ProgressRing = ({ percentage, radius, dimesions }: ProgressPie) => {
    const pct = cleanPercentage(percentage)
    const [{theme}] = useStateValue()
    
	return (
		<svg stroke-linecap='round'>
			<g transform={`rotate(-90 ${'100 100'})`}>
				<Circle color={theme === 'dark' ? '#222' : '#ddd'} percentage={100} radius={radius} />
				<Circle
					color={
						percentage > 50
							? '#22C55E'
							: percentage > 75
							? '#FFB800'
							: '#FF0000'
					}
					percentage={pct}
					radius={radius}
				/>
			</g>
			{/* <Text percentage={pct} /> */}
		</svg>
	)
}

export default ProgressRing
