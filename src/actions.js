import { 
	DISPLAY_EMAIL, 
	ADD_EMAIL_TO_INBOX,
	DELETE_EMAIL,
	MARK_AS_UNREAD,
	MARK_AS_SPAM
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

export const markAsUnread = () => ({
	type: MARK_AS_UNREAD
})

export const markAsSpam = () => ({
	type: MARK_AS_SPAM
})