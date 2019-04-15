import connect from 'react-redux/es/connect/connect';
import { getEvents, getCategories, handleOpenCreateEvent, handleCreateEvent, handleSubscribeChange } from "../../actions/dashboard.action";
import Dashboard from './dashboard';

const actions = {
    getEvents,
    getCategories,
    handleOpenCreateEvent,
    handleCreateEvent,
    handleSubscribeChange,
}

function mapStateToProps(state) {
    const { events, categories, showCreateEventModal } = state.dashboardReducer;

    return {
        events,
        categories,
        showCreateEventModal
    }
}

export default connect(mapStateToProps, actions) (Dashboard);
