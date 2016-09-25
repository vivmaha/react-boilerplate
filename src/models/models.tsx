export interface IHubItem {
    createElement(): JSX.Element;
    isMatch(query: string) : boolean;
}

export class HubGroup {
    title: string;
    items: IHubItem[];
}

export interface IHubStore {
    getGroups: () => HubGroup[];
    addChangeListener: (callback: Function) => void;
    removeChangeListener: (callback: Function) => void;
}