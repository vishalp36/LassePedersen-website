import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    //<Link className='navbar-brand' to={ '/' }>Lasse Pedersen</Link>
    //<div className='clearfix'></div>
    public render() {
        return <div className='main-nav'>
                <div className='navbar'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    
                </div>
                
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/work'} activeClassName='active'>Work</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/blog'} activeClassName='active'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'} activeClassName='active'>About</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Online
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink to={'/pathfinder'} activeClassName='active' className='dropdown-item'>Pathfinder</NavLink>
                                </li>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
