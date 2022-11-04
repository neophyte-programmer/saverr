import React from 'react'
import { useStateValue } from '../context/StateProvider'
import { Button } from '../utils/types'

const Button = ({
	text,
	icon,
	isTransparent,
	type,
	onClick,
	disabled,
}: Button) => {
	const [{ theme }] = useStateValue()
	return (
		<button
            className={`px-8 py-2 hover:scale-105 transition-all duration-500 ease-in-out rounded-lg text-white 
            ${
				theme === 'dark' && !isTransparent
					? 'bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-500 '
					: ''
                }
            ${
				theme === 'dark' && isTransparent
					? 'bg-transparent border-2 border-green-500 text-green-500 '
					: ''
                }
            ${
				theme === 'light' && !isTransparent
					? 'bg-gradient-to-br from-green-500 via-green-500 to-green-600 hover:from-green-500 hover:to-green-500 '
					: ''
                }
            ${
				theme === 'light' && isTransparent
					? 'bg-transparent border-2 border-green-500 text-green-500'
					: ''
                }
            `}
			onClick={onClick}
		>
			{icon && <p>{icon}</p>}
			<p>{text}</p>
		</button>
	)
}

export default Button
