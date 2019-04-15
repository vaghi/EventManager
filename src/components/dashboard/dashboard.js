import React, { PureComponent } from 'react';
import Category from '../category';
import OpenCreateEventButton from '../createEvent/openCreateEventButton';
import CreateEvent from '../createEvent/index';

class Dashboard extends PureComponent {

	componentDidMount() {
        this.props.getEvents();
		this.props.getCategories();
    }

	render() {
		const { categories, events, handleOpenCreateEvent, handleCreateEvent, handleSubscribeChange, showCreateEventModal } = this.props;

		return (
			<div>
				<Category title={"Upcoming 5 events"} events={events.filter(e => e.upcoming === true)} onSubscribeChange={handleSubscribeChange}/>
				{categories.map(c => <Category key={c.id} title={c.name} onSubscribeChange={handleSubscribeChange} events={events.filter(e => e.upcoming !== true && e.categoryId === c.id)}/>)}
				<OpenCreateEventButton onClick={(e) => handleOpenCreateEvent(true)}/>
				<CreateEvent openModal={showCreateEventModal} onCreateEvent={(e) => handleCreateEvent(e, events)} categories={categories} onClose={(e) => handleOpenCreateEvent(false)}/>
			</div>
		);
	}
}

export default Dashboard;
