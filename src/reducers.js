import { 
	DISPLAY_EMAIL, 
	ADD_EMAIL_TO_INBOX,
	DELETE_EMAIL,
	MARK_AS_UNREAD,
	MARK_AS_SPAM
} from './constants';

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
			case ADD_EMAIL_TO_INBOX:
				//In order to keep the openEmail position updated we have to add one position every time an email is added
				let openEmailCurr = state.openEmail;
				if(state.openEmail != null) openEmailCurr++ ;
				return Object.assign({}, state, { emails: [action.payload].concat(state.emails), openEmail: openEmailCurr });
			case DELETE_EMAIL:
				return Object.assign({}, state, {
				    emails: state.emails.map((email, index) => {
				      if (index === state.openEmail) {
				      	console.log(find);
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
				      	console.log(find);
				        return Object.assign({}, email, {
				          	folder: 'trash'
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
			default:
				return state;
	}
}