import { DISPLAY_EMAIL, ADD_EMAIL_TO_INBOX, DELETE_EMAIL } from './constants';

//When user clikc on email it has to mark as read
const initialState = {
	openEmail: null,
	emails: []
}

export const click = (state=initialState, action={}) => {
	switch(action.type) {
		case DISPLAY_EMAIL:
			return Object.assign({}, state, {
			    emails: state.emails.map((email, index) => {
			      if (index === action.payload) {
			        return Object.assign({}, email, {
			          	isReaded: true
			        })
			      }
			      return email
			    }),
			    openEmail: action.payload
			  });
		case DELETE_EMAIL:
			
		default:
			return state;
	}
}



export const addEmailToList = (state=initialState, action={}) => {
	switch(action.type) {
		case ADD_EMAIL_TO_INBOX:
			return Object.assign({}, state, { emails: [action.payload].concat(state.emails) });
		default:
			return state;
	}
}