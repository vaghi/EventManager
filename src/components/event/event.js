import React, { PureComponent } from 'react';
import './event.css';

class Event extends PureComponent {

	componentDidMount() {

    }

	render() {
		const { data, onSubscribeChange } = this.props;

		return (
			<div className='event-box'>
				<div className="event-name-container">
					<label className="event-name">{ data.name }</label>
				</div>
				<br/>
				<div className="event-label">
					{ data.description }
				</div>
				<br/>
				<div className="event-label">
					{ data.location }
				</div>
				<br/>
				<div className="event-label">
					{ data.date }
				</div>
				<input
		            name="isGoing"
					className="subscribe-checkbox"
		            type="checkbox"
		            checked={data.subscribed}
		            onChange={(e) => onSubscribeChange(e, data)} />
			</div>
		);
	}
}

export default Event;
