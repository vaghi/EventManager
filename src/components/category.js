import React, { PureComponent } from 'react';
import Title from './utils/title/title';
import Event from './event/event';
import './category.css';

class Category extends PureComponent {

	render() {
		const { title, events, onSubscribeChange } = this.props;

		return (
			<div className="category-container">
				<Title text={title}/>
				<div className="events-container">
					{events.length > 0 ?
						events.map(e => <Event key={e.id} data={e} onSubscribeChange={onSubscribeChange}/>) :
						<div className="empty-events">No events</div>
					}
				</div>
			</div>
		);
	}
}

export default Category;
