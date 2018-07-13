import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as showdown from 'showdown';

export class Blog extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return(
            <div className='content'>
                <h1>Blog</h1>
            </div>
        )
    }
}