import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './index.css';

import Main from './components/main';

import store from './store'

export class AppRender extends Component{
    render() {
        return (
            <div className="root">
                <Provider store={store}>
                    <Main></Main>
                </Provider>
            </div>
        );
    }
  }
