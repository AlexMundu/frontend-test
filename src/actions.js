import { 
	DISPLAY_EMAIL, 
	ADD_EMAIL_TO_INBOX,
	DELETE_EMAIL
} from './constants';

export const click = (index) => ({
	type: DISPLAY_EMAIL,
	payload: index
})

export const addEmailToInbox = ( email ) => ({
	type: ADD_EMAIL_TO_INBOX,
	payload: email
})

export const deleteEmail = () => ({
	type: DELETE_EMAIL
})