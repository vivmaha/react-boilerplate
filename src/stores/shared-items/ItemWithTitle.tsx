/// <reference path="../../../typings/index.d.ts"/>

import * as React from 'react'
import {IHubItem} from '../../models/models'

export default class ItemWithTitle implements IHubItem {
    title: string;

    constructor(title: string) {
      this.title = title;
    }
    isMatch(query: string) {
        return this.title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
    }
    createElement(): JSX.Element {
      throw new Error("override this method");      
    }
}