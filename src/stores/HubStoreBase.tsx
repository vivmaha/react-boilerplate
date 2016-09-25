/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react'
import {IHubItem, HubGroup, IHubStore} from '../models/models'
import Dispatcher from '../dispatcher/Dispatcher'
import * as HubActions from '../actions/HubActions';
import * as event from 'eventemitter2';
import ProjectItem from './shared-items/ProjectItem';
import RepoItem from './shared-items/RepoItem';


export default class HubStoreBase extends event.EventEmitter2 implements IHubStore {

    private filterText : string
    private allGroups : HubGroup[];
    private filteredGroup : HubGroup;

    constructor() {
        super();
        this.filteredGroup = new HubGroup(); 
        this.filteredGroup.title = 'Search results';
        this.filterText = '';

        // TODO: delay load this?
        this.allGroups = this.getGroupsFromServer();

        Dispatcher.register((action: any) => {
            if (action instanceof HubActions.UpdateFilterAction) {
                let updateFilterAction =  action as HubActions.UpdateFilterAction;
                this.changeFilterText(updateFilterAction.text);
                this.emitChange();
            }
        });
    }

    getGroupsFromServer() : HubGroup[] {
        throw new Error('override this');
    }

    private changeFilterText(text: string) : void {
        this.filterText = text;    
        if (this.filterText != '') {
            this.filteredGroup.items = [].concat.apply([], 
                this.allGroups.map(group => 
                    group.items.filter(item => 
                        item.isMatch(this.filterText)
                    )
                )
            );
        }
    }

    private emitChange() {
        this.emit('change');
    }

    getGroups() {
        if (this.filterText == '') {
            return this.allGroups;
        } else {
            return [this.filteredGroup];
        }
    }

    addChangeListener(callback: Function) {
    this.on('change', callback);
    }

    removeChangeListener(callback: Function) {
    this.removeListener('change', callback);
    }
}