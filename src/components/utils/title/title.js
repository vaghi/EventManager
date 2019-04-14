import React, { PureComponent } from 'react';
import './title.css';

class Title extends PureComponent {

	render() {
		return (
			<label className="dashboard-title">{this.props.text}</label>
		);
	}
}

export default Title;
