import React, { PureComponent } from 'react';
import './openCreateEventButton.css';

class OpenCreateEventButton extends PureComponent {

	render() {
		const {onClick } = this.props;

		return (
			<div className='create-event-button'>
				<button onClick={onClick} title="Create event">+</button>
			</div>
		);
	}
}

export default OpenCreateEventButton;
