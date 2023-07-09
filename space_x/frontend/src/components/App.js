import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Section from './layout/Section';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Section />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));