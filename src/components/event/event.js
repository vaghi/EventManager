import React, { PureComponent } from 'react';
import './event.css';

class Event extends PureComponent {

	componentDidMount() {

    }

	render() {
		const { data } = this.props;

		return (
			<div className='event-box'>
				<label className="event-name">{ data.name }</label>
				<br/>
				{ data.description }
				<br/>
				{ data.location }
				<br/>
				{ data.date }
			</div>
		);
	}
}

export default Event;
