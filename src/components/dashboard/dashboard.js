import React, { PureComponent } from 'react';
import Category from '../category/category';
import OpenCreateEventButton from '../createEvent/openCreateEventButton';
import CreateEvent from '../createEvent/index';

class Dashboard extends PureComponent {

	componentDidMount() {
        this.props.getEvents();
		this.props.getCategories();
    }

	render() {
		const { categories, events, handleOpenCreateEvent, handleCreateEvent, showCreateEventModal } = this.props;

		return (
			<div>
				<Category title={"Upcoming 5 events"} events={events.filter(e => e.upcoming === true)}/>
				{categories.map(c => <Category key={c.id} title={c.name} events={events.filter(e => e.upcoming !== true && e.categoryId === c.id)}/>)}
				<OpenCreateEventButton onClick={(e) => handleOpenCreateEvent(true)}/>
				<CreateEvent openModal={showCreateEventModal} onCreateEvent={(e) => handleCreateEvent(e, events	)} categories={categories} onClose={(e) => handleOpenCreateEvent(false)}/>
			</div>
		);
	}
}

export default Dashboard;
