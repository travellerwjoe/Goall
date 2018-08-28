import {
    Store,
    Action as ReduxAction,
    Reducer as ReduxReducer
} from 'redux'

export namespace State {
    export interface IStoreState extends Store {
        live: string
    }

    export interface IAction extends ReduxAction<symbol | string> {
        payload?: object
    }

    export interface IReducer extends ReduxReducer {
        
    }
}