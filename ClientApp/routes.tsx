import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';

import { Pathfinder } from './components/pathfinder/PathfinderHome';
import { Charactersheet } from './components/pathfinder/PathfinderCharactersheet';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route exact path='/work' component={ Work } />
    <Route exact path='/blog' component={ Blog } />
    <Route exact path='/contact' component={ Contact } />
    <Route exact path='/pathfinder' component={ Pathfinder } />
    <Route exact path='/pathfinder/charactersheet' component={ Charactersheet } />
</Layout>;
