import React from 'react'
import ReactDom from 'react-dom'
import { AccessibleIconIcon } from '@patternfly/react-icons'
import {MuiButton} from '@material-ui/core'
import {Button} from "@patternfly/react-core"
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Nested from './nested';

const App = () => {
  return (
    <div>
      There will be dragons
      <AcUnitIcon />
      <Button>Foo</Button>
      <MuiButton>Mui</MuiButton>
      <AccessibleIconIcon />
      <Nested />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'));
