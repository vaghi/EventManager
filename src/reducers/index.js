import { dashboardReducer } from './dashboard.reducer';
import { categoryReducer } from './category.reducer';
import { createEventReducer } from './createEvent.reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = {
    dashboardReducer,
    categoryReducer,
    createEventReducer
};

let reducers = (()=>{
    let reducer = { router: routerReducer };
    return Object.assign({},reducer,rootReducer);
})();

export default combineReducers(reducers);
