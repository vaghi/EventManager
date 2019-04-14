import * as types from '../constants/actionTypes/dashboardActionTypes.js';
import Fetcher from '../helpers/fetcher';

const fetcher = new Fetcher();

export const getEvents = (itemId) => (dispatch) => {

    const successCallback = (res) => {
        sortAndDispatch(res, dispatch);
    }

    const url = `http://localhost:3000/events/`;
    fetcher.get(url, successCallback);
};

export const getCategories = (itemId) => (dispatch) => {

    const successCallback = (res) => {
        dispatch({ type: types.GET_ALL_CATEGORIES, payload: res });
    }

    const url = `http://localhost:3000/categories/`;
    fetcher.get(url, successCallback);
};

export const handleOpenCreateEvent = (show) => ({ type: types.SHOW_CREATE_EVENT_MODAL, payload: show });

export const handleCreateEvent = (request, events) => (dispatch) => {
    const successCallback = (res) => {
        let copyEvents = [...events, res];
        sortAndDispatch(copyEvents, dispatch);
        dispatch({ type: types.SHOW_CREATE_EVENT_MODAL, payload: false });
    }

    const url = `http://localhost:3000/events/`;
    fetcher.post(url, request, successCallback);
};

const sortAndDispatch = (events, dispatch) => {
    let sortedEvents = events.sort((a,b) => a.date < b.date);

    for(let i = 0; i < 5 || i < sortedEvents.lenght; i++) {
        sortedEvents[i].upcoming = true;
    }

    dispatch({ type: types.GET_ALL_EVENTS, payload: sortedEvents });
};
