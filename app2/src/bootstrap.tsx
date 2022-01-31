import React from 'react'
import ReactDOM from 'react-dom'
import App2 from './app2'

const mount = (el: any) => {
  ReactDOM.render(<App2 />, el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('root__app2')
  if (el) {
    mount(el)
  }
}

export { mount }
export default App2
