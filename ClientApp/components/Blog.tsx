import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Blog extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return(
            <div>
                <h1>Blog</h1>
            </div>
        )
    }
}