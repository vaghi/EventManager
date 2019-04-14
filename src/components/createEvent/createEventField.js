import React, { PureComponent } from 'react';

class CreateEventField extends PureComponent {

	render() {
		const { label, onChange, value } = this.props;

		return (
			<div>
				<label>{label}</label>
				<br></br>
				<input type="text" onChange={(e) => onChange(e)} value={value}/>
			</div>
		);
	}
}

export default CreateEventField;
