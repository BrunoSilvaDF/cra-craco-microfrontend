import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './header'

const mount = (el: any) => {
  ReactDOM.render(<Header />, el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('root__header')
  if (el) {
    mount(el)
  }
}

export { mount }
export default Header
