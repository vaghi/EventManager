import React, { PureComponent } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {Flip, ToastContainer} from 'react-toastify';
import Dashboard from './dashboard';
import 'react-toastify/dist/ReactToastify.min.css';
import history from './utils/history';

class Main extends PureComponent {

    render() {
        return (
            <Router history={history}>
    			<div>
                    <Switch>
                        <Route path='/' component={Dashboard}/>
                    </Switch>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                        transition={Flip}
                    />
                </div>
            </Router>
        );
    }
}

export default Main;
