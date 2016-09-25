/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react'
import ProjectItem from './shared-items/ProjectItem';
import RepoItem from './shared-items/RepoItem';
import HubStoreBase from './HubStoreBase';
import {HubGroup, IHubStore} from '../models/models'

class FavoritesHubStore extends HubStoreBase {    
    getGroupsFromServer() : HubGroup[] {
        let projectsHubGroup = new HubGroup();
        projectsHubGroup.title = 'Projects';
        projectsHubGroup.items = [
        new ProjectItem('foo'),
        new ProjectItem('bar'),
        new ProjectItem('baz'),
        ];

        let reposHubGroup = new HubGroup();
        reposHubGroup.title = 'Repos';
        reposHubGroup.items = [
        new RepoItem('foo git'),
        new RepoItem('bar git'),
        new RepoItem('baz git'),
        ];

        return [
            projectsHubGroup,
            reposHubGroup
        ];
    }
}

export default new FavoritesHubStore() as IHubStore;