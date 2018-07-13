import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class About extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return(
            <div className='content'>
                <h1>About</h1>
            </div>
        )
    }
}