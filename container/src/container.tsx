import React, { lazy, Suspense } from 'react'
import SafeComponent from './safe-component'

const App2 = lazy(() => import('./app2'))
const App1 = lazy(() => import('./app1'))

const Container = () => {
  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #cecece',
      }}
    >
      <h1>Container application</h1>
      <SafeComponent>
        <Suspense fallback={() => <div>carregando app1</div>}>
          <App1 />
        </Suspense>
      </SafeComponent>
      <SafeComponent>
        <Suspense fallback={() => <div>carregando app2</div>}>
          <App2 />
        </Suspense>
      </SafeComponent>
    </div>
  )
}

export default Container
