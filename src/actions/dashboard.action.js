import * as types from '../constants/actionTypes/dashboardActionTypes.js';
import Fetcher from '../helpers/fetcher';
import Toaster from '../helpers/toaster';

const toaster = new Toaster();
const fetcher = new Fetcher();

export const getEvents = (itemId) => (dispatch) => {

    const successCallback = (res) => {
        markUpcomingAndDispatch(res, dispatch);
    }

    const url = `http://localhost:3000/events?_sort=date&_order=asc`;
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
        markUpcomingAndDispatch(copyEvents, dispatch);
        dispatch({ type: types.SHOW_CREATE_EVENT_MODAL, payload: false });
        toaster.success("Event created");
    }

    const url = `http://localhost:3000/events/`;
    fetcher.post(url, request, successCallback);
};

export const handleSubscribeChange = (e, data) => (dispatch) => {
    console.log(e);
    const successCallback = (res) => {
        const message = res.subscribed === true ? "Subscribed to event" : "Unsubscribed to event";
        dispatch({ type: types.EVENT_UPDATED, payload: res });
        toaster.success(message);
    }

    const request = {
        ...data,
        subscribed: e.target.checked
    }

    const url = `http://localhost:3000/events/${data.id}`;
    fetcher.put(url, request, successCallback);
};

const markUpcomingAndDispatch = (events, dispatch) => {
    for(let i = 0; i < 5 || i < events.lenght; i++) {
        events[i].upcoming = true;
    }

    dispatch({ type: types.GET_ALL_EVENTS, payload: events });
};
