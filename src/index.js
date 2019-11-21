import React from 'react'
import { render } from 'react-dom'
import {AccessibleIconIcon} from '@patternfly/react-icons'

const App = () => {
  return (
    <div>
      There will be dragons
      <AccessibleIconIcon />
    </div>
  )
}

render(<App />, documnet.getElementById('root'));
