import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as showdown from 'showdown';

interface HomeState {
    md: string;
}

export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
    public render() {
        const md = this.state;
        return (
            <div>
                <h1>New Website</h1>
            </div>
        );

    }
}
