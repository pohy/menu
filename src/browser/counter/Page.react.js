/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/9/2016.
 */
import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Counter from './Counter.react';

class Page extends Component {
    render() {
        return (
          <div>
            <Helmet title="Click counter" />
            <h4>Click counter</h4>
            <Counter />
          </div>
        );
    }
}

export default Page;
