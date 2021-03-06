/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../../browser/app/App.react.js';
import Home from '../../browser/home/Page.react.js';
import Counter from '../../browser/counter/Page.react.js';
import About from '../../browser/about/Page.react.js';

const routes = (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={Counter} path="counter" />
        <Route component={About} path="about" />
    </Route>
);

export default routes;
