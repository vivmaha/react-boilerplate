/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react'
import ProjectItem from './shared-items/ProjectItem';
import RepoItem from './shared-items/RepoItem';
import HubStoreBase from './HubStoreBase';
import {HubGroup, IHubStore} from '../models/models'

class ProjectsHubStore extends HubStoreBase {    
    getGroupsFromServer() : HubGroup[] {
        let recentHubGroup = new HubGroup();
        recentHubGroup.title = 'Recent projects';
        recentHubGroup.items = [
            new ProjectItem('foo'),
            new ProjectItem('bar'),
            new ProjectItem('baz'),
        ];

        let allHubGroup = new HubGroup();
        allHubGroup.title = 'All projects';
        allHubGroup.items = [
            new ProjectItem('foo'),
            new ProjectItem('bar'),
            new ProjectItem('baz'),
            new ProjectItem('foo2'),
            new ProjectItem('bar2'),
            new ProjectItem('baz2'),
        ];

        return [
            recentHubGroup,
            allHubGroup
        ];
    }
}

export default new ProjectsHubStore() as IHubStore;