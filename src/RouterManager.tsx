import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Hello from './Hello'
import NotFound from './components/NotFound'

export interface IRouterManagerProps {
}

export default function RouterManager(props: IRouterManagerProps) {
    return (
        <Switch>
            <Route path="/hello" component={Hello} />
            <Route component={NotFound} />
        </Switch>
    );
}
