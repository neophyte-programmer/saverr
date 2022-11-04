import React from 'react'
import { useStateValue } from '../context/StateProvider'
import { BsSun, BsMoonFill } from 'react-icons/bs'

const ToggleTheme = () => {
	const [{ theme }, dispatch] = useStateValue()

	const toggleTheme = () => {
		dispatch({
			type: 'SET_THEME',
			theme: theme === 'light' ? 'dark' : 'light',
		})
	}
	return (
		<div
			className={`border px-4 py-2 w-max cursor-pointer border-green-500  text-green-500 ${theme === 'light' ? 'bg-gray-200' : 'bg-[#222]'} `}
			onClick={toggleTheme}
		>
			{theme === 'light' ? (
				<div>
					<BsMoonFill />
				</div>
			) : (
				<div>
					<BsSun />
				</div>
			)}
		</div>
	)
}

export default ToggleTheme
