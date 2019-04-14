import React, { PureComponent } from 'react';
import Modal from 'react-responsive-modal';
import CreateEventField from './createEventField';

class CreateEvent extends PureComponent {

	render() {
		const { openModal, onCreateEvent, onClose, onChangeNewEventField, categories,
			name, description, categoryId, location, date} = this.props;

		return (
			<Modal open={openModal} onClose={onClose} center>
				<div className="modal-pop-up-header-container">
					<h2>Create event</h2>
				</div>
				<div className="modal-pop-up-container">
					<CreateEventField label="Name" onChange={(e) => onChangeNewEventField(e, "name")} value={name}/>
					<CreateEventField label="Description" onChange={(e) => onChangeNewEventField(e, "description")} value={description}/>
					<label>Category</label>
					<br></br>
					<select onChange={(e) => onChangeNewEventField(e, "categoryId")}>
						{categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
					</select>
					<CreateEventField label="Location" onChange={(e) => onChangeNewEventField(e, "location")} value={location}/>
					<CreateEventField label="Date" onChange={(e) => onChangeNewEventField(e, "date")} value={date}/>
				</div>
				<div className="modal-pop-up-container">
					<button onClick={onClose}>Cancel</button><button
						onClick={(e) => onCreateEvent({name, description, categoryId, location, date})}>Ok</button>
				</div>
			</Modal>
		);
	}
}

export default CreateEvent;
