import React from 'react'
import ReactDOM from 'react-dom'
import App1 from './app1'

const mount = (el: any) => {
  ReactDOM.render(<App1 />, el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('root__app1')
  if (el) {
    mount(el)
  }
}

export { mount }
export default App1
