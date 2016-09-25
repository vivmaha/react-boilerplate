/// <reference path="../typings/index.d.ts"/>

import * as React from 'react'
import * as ReactDom from 'react-dom'
import HubView from './views/HubView'

ReactDom.render(
  <HubView />,
  document.getElementById('content')
);