import React, { PureComponent } from 'react';
import Modal from 'react-responsive-modal';
import CreateEventField from './createEventField';

class CreateEvent extends PureComponent {

	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
		this.handleCreateEvent = this.handleCreateEvent.bind(this);
	}

	handleClose() {
		this.props.resetInitialState();
		this.props.onClose();
	}

	handleCreateEvent() {
		const { onCreateEvent, name, description, categoryId, location, date } = this.props;
		onCreateEvent({name, description, categoryId, location, date});
		this.handleClose();
	}

	render() {
		const { openModal, onClose, onChangeNewEventField, categories,
			name, description, categoryId, location, date} = this.props;

		return (
			<Modal open={openModal} onClose={this.handleClose} center>
				<div className="modal-pop-up-header-container">
					<h2>Create event</h2>
				</div>
				<div className="modal-pop-up-container">
					<CreateEventField label="Name" onChange={(e) => onChangeNewEventField(e, "name")} value={name}/>
					<CreateEventField label="Description" onChange={(e) => onChangeNewEventField(e, "description")} value={description}/>
					<label>Category</label>
					<br></br>
					<select onChange={(e) => onChangeNewEventField(e, "categoryId")} value={categoryId}>
						{categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
					</select>
					<CreateEventField label="Location" onChange={(e) => onChangeNewEventField(e, "location")} value={location}/>
					<CreateEventField label="Date" onChange={(e) => onChangeNewEventField(e, "date")} value={date}/>
				</div>
				<div className="modal-pop-up-container">
					<button onClick={onClose}>Cancel</button><button
						onClick={this.handleCreateEvent}>Ok</button>
				</div>
			</Modal>
		);
	}
}

export default CreateEvent;
