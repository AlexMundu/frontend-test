import { 
	DISPLAY_EMAIL, 
	ADD_EMAIL_TO_INBOX,
	DELETE_EMAIL,
	MARK_AS_UNREAD,
	MARK_AS_SPAM,
	OPEN_INBOX_TAB,
	OPEN_TRASH_TAB,
	OPEN_SPAM_TAB
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

export const openInboxTab = (tabName) => ({
	type: OPEN_INBOX_TAB,
	payload: tabName
})

export const openTrashTab = (tabName) => ({
	type: OPEN_TRASH_TAB,
	payload: tabName
})

export const openSpamTab = (tabName) => ({
	type: OPEN_SPAM_TAB,
	payload: tabName
})