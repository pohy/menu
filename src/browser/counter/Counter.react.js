/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/12/2016.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as counterActions from '../../common/counter/actions';

class Page extends Component {
    static propTypes = {
        clickCount: PropTypes.number.isRequired,
        increaseClickCount: PropTypes.func.isRequired,
        resetClickCount: PropTypes.func.isRequired
    };

    render() {
        const {clickCount, increaseClickCount, resetClickCount} = this.props;

        return (
          <div>
            <p>Click count: {clickCount}</p>
            <button
              className="btn danger"
              onClick={increaseClickCount}
            >
                Click me!
            </button>
            <button
              className="default"
              onClick={resetClickCount}
            >
                Reset
            </button>
          </div>
        );
    }
}

export default connect(state => ({
    clickCount: state.counter.clickCount
}), counterActions)(Page);
