import React from 'react'
import { useStateValue } from '../context/StateProvider'
import Button from './Button'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase.config'
import ToggleTheme from './ToggleTheme'
import { actionTypes } from '../context/reducer'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'


const NotLoggedIn = () => {
    const [{ theme, user }, dispatch] = useStateValue()
    const router = useRouter()
	const provider = new GoogleAuthProvider()

    const login = async () => {
        console.log('logging in....')
		const {
			user: { refreshToken, providerData },
        } = await signInWithPopup(auth, provider)
        console.log('loggedIn ....')
		dispatch({
			type: actionTypes.SET_USER,
			user: providerData[0], // The 0 index of the providerData contains user information
		})
		if (typeof window !== 'undefined') {
			localStorage.setItem('user', JSON.stringify(providerData[0]))
		}
		Cookies.set(`$user.uid}`, 'true')
        router.push('/')
	}
	return (
		<div
			className={`w-full h-full flex flex-col gap-5 items-center justify-center`}
		>
			<div className='absolute top-8'>
				<ToggleTheme />
			</div>
			<p className={`text-5xl`}>
				Welcome to{' '}
				<span className={`text-green-500 font-medium`}> Saverr</span>!{' '}
			</p>
			<p
				className={`${
					theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
				} max-w-3xl text-center`}
			>
				Track your savings with Saverr. Keep track of your savings
				towards a particular goal without the hassle of counting your
				money every time! Sign In with your Google Account to begin
			</p>
			<Button text='Sign In' onClick={login} />
		</div>
	)
}

export default NotLoggedIn
