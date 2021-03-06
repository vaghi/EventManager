import * as types from '../constants/actionTypes/createEventActionTypes';

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);

const initialState = {
    name: '',
    description: '',
    categoryId: '',
    location: '',
    date: ""
}

export const createEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case types.ON_CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case types.ON_CHANGE_CATEGORY:
            return {
                ...state,
                categoryId: action.payload
            }
        case types.ON_CHANGE_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case types.ON_CHANGE_DATE:
            return {
                ...state,
                date: action.payload
            }
        case types.RESET_INITIAL_STATE:
            return {
                initialState
            }
        default:
        return state;
    }
}
