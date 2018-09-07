import { DISPLAY_EMAIL, ADD_EMAIL_TO_INBOX, DELETE_EMAIL } from './constants';

//When user clikc on email it has to mark as read
const initialState = {
	openEmail: null,
	emails: []
}

export const click = (state=initialState, action={}) => {
	switch(action.type) {
		case DISPLAY_EMAIL:
			const copyEmails = state.emails.splice();
			copyEmails[state.openEmail].folder = 'trash';
			return Object.assign({}, state, { openEmail:action.payload });
		case DELETE_EMAIL:
			const copyEmails = state.emails.splice();
			copyEmails[state.openEmail].folder = 'trash';
			return Object.assign({}, state, { openEmail: null, emails: copyEmails });
		default:
			return state;
	}
}



export const addEmailToList = (state=initialState, action={}) => {
	switch(action.type) {
		case ADD_EMAIL_TO_INBOX:
			return Object.assign({}, state, { emails: [action.payload, ... state.emails] });
		default:
			return state;
	}
}