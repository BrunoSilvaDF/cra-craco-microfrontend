import React, { useEffect, useRef } from 'react'
import { mount } from 'app2/App2'

const App2 = () => {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
    console.log('app2')
  }, [])
  return <div ref={ref} id='app2' />
}

export default App2
