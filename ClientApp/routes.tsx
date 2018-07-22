import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { Blog } from './components/Blog';
import { About } from './components/About';

import { Pathfinder } from './components/pathfinder/PathfinderHome';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route exact path='/work' component={ Work } />
    <Route exact path='/blog' component={ Blog } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/pathfinder' component={ Pathfinder } />
</Layout>;
