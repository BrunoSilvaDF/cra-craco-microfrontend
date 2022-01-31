import React, { lazy, Suspense } from 'react'
import SafeComponent from './safe-component'

const Header = lazy(() => import('./remotes/header'))
// const Header = lazy(() => import('header/Header'))
const App2 = lazy(() => import('./remotes/app2'))
// const App2 = lazy(() => import('app2/App2'))
const App1 = lazy(() => import('./remotes/app1'))
// const App1 = lazy(() => import('app1/App1'))

const Container = () => {
  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #cecece',
      }}
    >
      <SafeComponent>
        <Suspense fallback={() => <div>loading header</div>}>
          <Header />
        </Suspense>
      </SafeComponent>
      <h1>Container application</h1>
      <SafeComponent>
        <Suspense fallback={() => <div>loading app1</div>}>
          <App1 />
        </Suspense>
      </SafeComponent>
      <SafeComponent>
        <Suspense fallback={() => <div>loading app2</div>}>
          <App2 />
        </Suspense>
      </SafeComponent>
    </div>
  )
}

export default Container
