import * as types from '../constants/actionTypes/dashboardActionTypes';

const initialState = {
    events: [],
    categories: [],
    showCreateEventModal: false
}

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case types.GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case types.SHOW_CREATE_EVENT_MODAL:
            return {
                ...state,
                showCreateEventModal: action.payload
            }
        case types.EVENT_UPDATED:
            let events = [...state.events];
            var foundIndex = events.findIndex(x => x.id === action.payload.id);
            events[foundIndex] = action.payload;

            return {
                ...state,
                events
            }
        default:
            return state;
    }
}
