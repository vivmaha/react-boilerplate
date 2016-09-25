/// <reference path="../../../typings/index.d.ts"/>

import * as React from 'react'
import ItemWithTitle from './ItemWithTitle'

export default class ProjectItem extends ItemWithTitle {
    createElement() {
      return <p>This is project '{this.title}'</p>;
    }
}