import React, { lazy, Suspense } from 'react'
import ReactDom from 'react-dom'
// const ESM = lazy(() => import(/* webpackChunkName: "esm-chunk" */ './esm'))
const CJS = lazy(() => import(/* webpackChunkName: "cjs-chunk" */ './cjs'))
// const UMD = lazy(() => import(/* webpackChunkName: "umd-chunk" */ './umd'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <ESM />
        <CJS />
        <UMD />
      </Suspense>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'));
