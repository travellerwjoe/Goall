import * as React from 'react';
import { RouteComponentProps } from 'react-router'

export interface INotFoundProps extends RouteComponentProps<any> {

}

export default function NotFound(props: INotFoundProps) {
    return (
        <div>
            404 Not Found!
            <div>
                Url: {props.location.pathname}
            </div>
      </div>
    );
}
