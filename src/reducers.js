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
//When user clikc on email it has to mark as read
const initialState = {
	openEmail: null,
	emails: [],
	openTab: 'inbox'
}

export const click = (state=initialState, action={}) => {
	switch(action.type) {
		//When click on email to display
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

			case ADD_EMAIL_TO_INBOX:
				//In order to keep the openEmail position updated we have to add one position every time an email is added
				let openEmailCurr = state.openEmail;
				if(state.openEmail != null) openEmailCurr++ ;
				return Object.assign({}, state, { emails: [action.payload].concat(state.emails), openEmail: openEmailCurr });

			//Adds the email to trash folder
			case DELETE_EMAIL:
				return Object.assign({}, state, {
				    emails: state.emails.map((email, index) => {
				      if (index === state.openEmail) {
				        return Object.assign({}, email, {
				          	folder: 'trash'
				        })
				      }
				      return email
				    }),
				    openEmail: null
				  });

			case MARK_AS_SPAM:
				return Object.assign({}, state, {
				    emails: state.emails.map((email, index) => {
				      if (index === state.openEmail) {
				        return Object.assign({}, email, {
				          	folder: 'spam'
				        })
				      }
				      return email
				    }),
				    openEmail: null
				  });

			case MARK_AS_UNREAD:
				return Object.assign({}, state, {
				    emails: state.emails.map((email, index) => {
				      if (index === state.openEmail) {
				        return Object.assign({}, email, {
				          	isReaded: false
				        })
				      }
				      return email
				    })
				  });

			case OPEN_INBOX_TAB:
				return Object.assign({}, state, {openTab: action.payload});

			case OPEN_TRASH_TAB:
				return Object.assign({}, state, {openTab: action.payload});

			case OPEN_SPAM_TAB:
				return Object.assign({}, state, {openTab: action.payload});

			default:
				return state;
	}
}