import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Pathfinder extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className='content'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1>Welcome!</h1>
                        <p>
                            This is the Pathfinder Site!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
