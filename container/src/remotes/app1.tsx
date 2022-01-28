import React, { useEffect, useRef } from 'react'
import { mount } from 'app1/App1'

const App1 = () => {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
    console.log('app1')
  }, [])
  return <div ref={ref} id='app1' />
}

export default App1
