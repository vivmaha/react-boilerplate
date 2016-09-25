/// <reference path="../../../typings/index.d.ts"/>

import * as React from 'react'
import {IHubItem, HubGroup} from '../../models/models'
import HubActions from '../../actions/HubActions'

interface Props {
    groups: HubGroup[];
}

interface State {
  filterQuery: string;
}

export default class Hub extends React.Component<Props, State> {
    constructor(props, context) {
        super(props, context);
        this.state = { 
            filterQuery: ''
        };
        this.onFilterUpdate = this.onFilterUpdate.bind(this);
    }

    render() {
      let createItemsElements = (items: IHubItem[]) : JSX.Element[] => {
        return items.map(item => <li>{item.createElement()}</li>);
      };

      let createGroupElement = (group: HubGroup) : JSX.Element => {
        return (
            <li>
              <h1>{group.title}</h1>
              <ul>{createItemsElements(group.items)}</ul>
            </li>
        );
      };

      let groupElements = this.props.groups.map(createGroupElement);
      return (
        <div>
            <input
                placeholder="Search..."
                onChange={this.onFilterUpdate}
            />
            <ul>{groupElements}</ul>
        </div>
      );
    }

    onFilterUpdate(ev): void {
        var newValue = (ev.target as any).value;
        this.setState({filterQuery: newValue});
        HubActions.updateFilter(newValue);
    }
}