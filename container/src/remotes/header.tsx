import React, { useEffect, useRef } from 'react'
import { mount } from 'header/Header'

const Header = () => {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
    console.log('header')
  }, [])
  return <div ref={ref} id='header' />
}

export default Header
