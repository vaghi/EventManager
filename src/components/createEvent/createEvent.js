import React, { PureComponent } from 'react';
import Modal from 'react-responsive-modal';
import CreateEventField from './createEventField';
import DatePicker from "react-datepicker";
import Toaster from '../../helpers/toaster';
import "react-datepicker/dist/react-datepicker.css";
import "./createEvent.css"

const toaster = new Toaster();

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

		if(this.validateFields(name, description, categoryId, location, date) === false) {
			return;
		}

		const day = ("0" + date.getDate()).slice(-2);
		const month = ("0" + (date.getMonth() + 1)).slice(-2);

		const formattedDate = `${date.getFullYear()}-${month}-${day}`;
		onCreateEvent({name, description, categoryId, location, date:formattedDate});
		this.handleClose();
	}

	validateFields(name, description, categoryId, location, date) {
	    if(this.isEmptyOrSpaces(name)) {
	        toaster.warning("Invalid Name");
	        return false;
	    }

	    if(this.isEmptyOrSpaces(description)) {
	        toaster.warning("Invalid Description");
	        return false;
	    }

	    if(!Number.isInteger(categoryId)) {
	        toaster.warning("Invalid Category");
	        return false;
	    }

	    if(this.isEmptyOrSpaces(location)) {
	        toaster.warning("Invalid Location");
	        return false;
	    }

	    if(this.isEmptyOrSpaces(date)) {
	        toaster.warning("Invalid Date");
	        return false;
	    }

	    return true;
	}

	isEmptyOrSpaces(str) {
	    return str === undefined || str === null || str.match(/^ *$/) !== null;
	}

	render() {
		const { openModal, onClose, onChangeNewEventField, categories,
			name, description, categoryId, location, date} = this.props;

		const today = new Date();
		let tomorrow = new Date();
		tomorrow.setDate(today.getDate()+1);

		return (
			<Modal open={openModal} onClose={this.handleClose} center classNames={{ modal: "modal-pop-up"}}>
				<div className="modal-pop-up-header-container">
					<h2>Create event</h2>
				</div>
				<div className="modal-pop-up-container">
					<CreateEventField label="Name" maxlength="20" onChange={(e) => onChangeNewEventField(e, "name")} value={name}/>
					<CreateEventField label="Description" maxlength="60" onChange={(e) => onChangeNewEventField(e, "description")} value={description}/>
					<select onChange={(e) => onChangeNewEventField(e, "categoryId")} value={categoryId}>
						<option value="" disabled selected>Category</option>
						{categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
					</select>
					<CreateEventField label="Location" maxlength="30" onChange={(e) => onChangeNewEventField(e, "location")} value={location}/>
					<DatePicker
						selected={date}
						onChange={(e) => onChangeNewEventField(e, "date")}
						minDate={tomorrow}
						dateFormat="yyyy-MM-dd"
						placeholderText="Date"
					/>
				</div>
				<div className="modal-pop-up-container footer">
					<button onClick={this.handleClose}>Cancel</button><button
						onClick={this.handleCreateEvent}>Ok</button>
				</div>
			</Modal>
		);
	}
}

export default CreateEvent;
