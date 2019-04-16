import React, { PureComponent } from 'react';

class CreateEventField extends PureComponent {

	render() {
		const { label, onChange, value, maxlength } = this.props;

		return (
			<div>
				<input type="text" name={label} placeholder={label} maxlength={maxlength}
					onChange={(e) => onChange(e)} value={value}/>
			</div>
		);
	}
}

export default CreateEventField;
