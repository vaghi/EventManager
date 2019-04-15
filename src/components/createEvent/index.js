import connect from 'react-redux/es/connect/connect';
import { onChangeNewEventField, resetInitialState } from "../../actions/createEvent.action";
import CreateEvent from './createEvent';

const actions = {
    onChangeNewEventField,
    resetInitialState
}

function mapStateToProps(state) {
    const { name, description, categoryId, location, date } = state.createEventReducer;

    return {
        name,
        description,
        categoryId,
        location,
        date
    }
}

export default connect(mapStateToProps, actions) (CreateEvent);
