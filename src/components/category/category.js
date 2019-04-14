import React, { PureComponent } from 'react';
import Title from '../utils/title/title';
import Event from '../event/event';

class Category extends PureComponent {

	render() {
		const { title, events } = this.props;

		return (
			<div>
				<Title text={title}/>
				{events.map(e => <Event key={e.id} data={e}/>)}
			</div>
		);
	}
}

export default Category;
