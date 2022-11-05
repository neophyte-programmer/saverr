import React from 'react'
import { useStateValue } from '../context/StateProvider'

const Footer = () => {
    const [{ theme }] = useStateValue()
  return (
      <footer className={`absolute bottom-0 max-w-screen w-full flex items-center justify-center py-3 border-t text-sm 
      ${ theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} `}>
          <p> <span className='text-green-500 text-semibold'>Saverr</span> by <a href="https://github.com/neophyte-programmer" target='_blank' className='border-b border-green-200'>Nutifafa</a> </p>
    </footer>
  )
}

export default Footer