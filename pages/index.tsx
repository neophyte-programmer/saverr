import Head from 'next/head'
import NotLoggedIn from '../components/NotLoggedIn'
import ToggleTheme from '../components/ToggleTheme'
import { useStateValue } from '../context/StateProvider'
import { useState, useEffect } from 'react'
import Loader from '../components/Loader'

export default function Home() {
  const [{ user, theme }] = useStateValue()
  const [loading, setLoading] = useState(false)
  const [ welcomeLoading, setWelcomeLoading ] = useState(false)
  const [ endUser, setEndUser ] = useState(null)

  useEffect(() => {
    setLoading(true)
    setEndUser(user)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);

  useEffect(() => {
    setWelcomeLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [user]);


	return (
		<div className={`w-screen h-screen ${ theme === 'dark' ? 'bg-[#111] text-white' : 'bg-gray-100 text-black'}`}>
			<Head>
				<title>Saverr</title>
			</Head>
      <main className={`w-full h-full`}>
        {
          loading ? (
            <div className='w-screen h-screen flex items-center justify-center'>
              <Loader />
            </div>
          ) : (
              <div className='w-full h-full '>
                {
                  endUser !== null ? (
                    <section className=''>
                        You are logged in
                    </section>
                    ) : (
                   <NotLoggedIn />
                      
                  )
                }
              </div>
          )
        }
      </main>
		</div>
	)
}
