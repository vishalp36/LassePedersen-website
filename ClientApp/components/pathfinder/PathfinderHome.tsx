import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';

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
                        <NavLink to={ '/pathfinder/charactersheet' }>Character Sheet</NavLink> <em>Under construction</em>
                    </div>
                </div>
            </div>
        );
    }
}
