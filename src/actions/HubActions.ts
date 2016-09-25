/// <reference path="../../typings/index.d.ts"/>
import Dispatcher from '../dispatcher/Dispatcher'

export class UpdateFilterAction {
    text: string;
    
    constructor(text: string) {
        this.text = text;
    }
}

export default {
    updateFilter(text: string): void {
        Dispatcher.dispatch(new UpdateFilterAction(text));
    }
}