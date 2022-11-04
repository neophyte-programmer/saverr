import React from 'react'
import { useStateValue } from '../context/StateProvider'

const ButtonLoader = () => {
    const [{theme}] = useStateValue()

  return (
    <div>ButtonLoader</div>
  )
}

export default ButtonLoader