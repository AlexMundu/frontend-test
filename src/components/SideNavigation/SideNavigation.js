import React from 'react';
import './SideNavigation.scss';

const SideNavigation = ({ onChangeToInbox, onChangeToTrash, onChangeToSpam, openTab }) => {
	let inboxTabStyle ,trashTabStyle , spamTabStyle;
	inboxTabStyle = trashTabStyle = spamTabStyle =  'option';

	switch (openTab){
		case 'inbox':
			inboxTabStyle += ' selected'
			break;
		case 'trash':
			trashTabStyle += ' selected'
			break;
		case 'spam':
			spamTabStyle += ' selected'
			break;
	}
	
	return(
		<div>
			<nav className='SideNav'>
			  <p className={ inboxTabStyle } onClick={() => onChangeToInbox('inbox')}><i className='fas fa-inbox'></i> Inbox</p>
			  <p className={ trashTabStyle } onClick={() => onChangeToTrash('trash')}><i className='far fa-trash-alt'></i> Trash</p>
			  <p className={ spamTabStyle } onClick={() => onChangeToSpam('spam')}><i className='fas fa-microchip'></i> Spam</p>
			</nav>
		</div>
	)
}

export default SideNavigation;