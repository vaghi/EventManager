import React, { PureComponent } from 'react';
import './event.css';

class Event extends PureComponent {

	componentDidMount() {

    }

	render() {
		const { data, onSubscribeChange } = this.props;

		return (
			<div className='event-box'>
				<label className="event-name">{ data.name }</label>
				<br/>
				{ data.description }
				<br/>
				{ data.location }
				<br/>
				{ data.date }
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
