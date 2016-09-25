/// <reference path="../../typings/index.d.ts"/>

import * as React from 'react'
import { HubGroup } from '../models/models'
import Hub from '../components/Hub/Hub'
import FavoritesHubStore from '../stores/FavoritesHubStore'
import ProjectsHubStore from '../stores/ProjectsHubStore'

let store = ProjectsHubStore;
//let store = FavoritesHubStore;

interface State {
    groups: HubGroup[];
}

interface Props {
}

function getHubStoreData() : State {
  return {
      groups: store.getGroups(),
  };
}


export default class HubView extends React.Component<Props, State> {
    constructor(props, context) {
        super(props, context);
        this.state = getHubStoreData();
    }

    componentDidMount() {
        store.addChangeListener((ev) => {
            this.setState(getHubStoreData());
        });
    }

    render() {
        return (
            <Hub 
                groups={this.state.groups}
            />
        );
    }
}