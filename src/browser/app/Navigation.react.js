/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
    render() {
        return (
          <div>
            <Link activeClassName="active" onlyActiveOnIndex to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link activeClassName="active" to="/counter">Counter</Link>
            &nbsp;|&nbsp;
            <Link activeClassName="active" to="/about">About</Link>
          </div>
        );
    }
}

export default Navigation;
