import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';

export class Pathfinder extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className='content'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1>Pathfinder RPG</h1>
                        <p>
                            This is a site I use for my Pathfinder RPG related projects.
                        </p>
                        <NavLink to={ '/pathfinder/charactersheet' }>Character Sheet</NavLink> <em>Under construction</em>
                    </div>
                </div>
            </div>
        );
    }
}
