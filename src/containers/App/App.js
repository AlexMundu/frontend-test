import React, {Component} from 'react';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
import EmailList from '../../components/EmailList/EmailList';
import EmailNavigation from '../../components/EmailNavigation/EmailNavigation';
import Email from '../../components/Email/Email';
import './App.scss';
import { 
	click, 
	addEmailToInbox, 
	deleteEmail, 
	markAsUnread, 
	markAsSpam,
	openInboxTab,
	openTrashTab,
	openSpamTab
} from '../../actions';
import { connect } from 'react-redux';
import initialEmails from './mail-data.json';



const mapStateToProps = (state) => {
	return {
		emails: state.emails,
		openEmail: state.openEmail,
		openTab: state.openTab
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (index) => dispatch(click(index)),
		addEmailToInbox: (email) => dispatch(addEmailToInbox(email)),
		onDeleteClick: () => dispatch(deleteEmail()),
		onMarkAsUnread: () => dispatch(markAsUnread()),
		onMarkAsSpam: () => dispatch(markAsSpam()),
		onChangeToInbox: (tabName) => dispatch(openInboxTab(tabName)),
		onChangeToTrash: (tabName) => dispatch(openTrashTab(tabName)),
		onChangeToSpam: (tabName) => dispatch(openSpamTab(tabName)),
	}
}

class App extends Component {

	componentDidMount() {
		//Add new emails to the email list

		setInterval(()=> {
			initialEmails.forEach( email => {
			email.folder = 'inbox';
			this.props.addEmailToInbox(email);
		})
		}, 90000);

		//Placeholder emails
		// for(let i = 0; i < initialEmails.length; i++){
		// 	initialEmails.forEach( email => {
		// 		email.folder = 'inbox';
		// 		this.props.addEmailToInbox(email);
		// 	})
		// }
	}

    render () {
    	const { 
    		onClick, 
    		emails, 
    		openEmail, 
    		onDeleteClick, 
    		onMarkAsUnread, 
    		onMarkAsSpam,
    		onChangeToInbox,
    		onChangeToTrash,
    		onChangeToSpam,
    		openTab
    	} = this.props; 
    	return (
    		<div id='Appcontainer'>
    			<div id='EmailListContainer'>
		        	<SideNavigation 
		        		onChangeToTrash={onChangeToTrash}
		        		onChangeToInbox={onChangeToInbox}
		        		onChangeToSpam={onChangeToSpam}
		        		openTab={openTab}
		        	/>
		        	<EmailList 
		        		emails={ emails } 
		        		onClick={ onClick } 
		        		openEmail={ openEmail }
		        		openTab={ openTab }
		        	/>
		        </div>
				<div id='EmailDisplay'>

					{ openEmail != null ?
							<div>
								<EmailNavigation 
									subject={ emails[openEmail].subject } 
									onDeleteClick={ onDeleteClick }
									onMarkAsUnread={ onMarkAsUnread }
									onMarkAsSpam = { onMarkAsSpam }/>
								<Email email={ emails[openEmail] }/>
							</div>
						: 
							<div className='empty'>
								<i className="far fa-envelope"></i>
							</div>
					}

				</div>
		    </div>
    	) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);