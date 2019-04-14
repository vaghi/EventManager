import * as types from '../constants/actionTypes/createEventActionTypes.js';

export const onChangeNewEventField = (e, field) => (dispatch) => {
    switch (field) {
        case "name":
            dispatch({ type: types.ON_CHANGE_NAME, payload: e.target.value });
            break;
        case "description":
            dispatch({ type: types.ON_CHANGE_DESCRIPTION, payload: e.target.value });
            break;
        case "categoryId":
            const numericValue = parseInt(e.target.value);
            dispatch({ type: types.ON_CHANGE_CATEGORY, payload: numericValue });
            break;
        case "location":
            dispatch({ type: types.ON_CHANGE_LOCATION, payload: e.target.value });
            break;
        case "date":
            dispatch({ type: types.ON_CHANGE_DATE, payload: e.target.value });
            break;
        default:
    }

};
