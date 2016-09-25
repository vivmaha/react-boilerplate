/// <reference path="../../../typings/index.d.ts"/>

import * as React from 'react'
import ItemWithTitle from './ItemWithTitle'

export default class RepoItem extends ItemWithTitle {
    createElement() {
      return <p>This is repo '{this.title}'</p>;
    }
}