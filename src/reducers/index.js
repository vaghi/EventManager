import { dashboardReducer } from './dashboard.reducer';
import { createEventReducer } from './createEvent.reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = {
    dashboardReducer,
    createEventReducer
};

let reducers = (()=>{
    let reducer = { router: routerReducer };
    return Object.assign({},reducer,rootReducer);
})();

export default combineReducers(reducers);
