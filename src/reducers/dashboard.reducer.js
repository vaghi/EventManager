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
        default:
            return state;
    }
}
