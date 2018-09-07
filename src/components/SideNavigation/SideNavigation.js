import React from 'react';
import './SideNavigation.scss';

const SideNavigation = ({ onChangeToInbox, onChangeToTrash, onChangeToSpam }) => {
	return(
		<div>
			<nav className='SideNav'>
			  <p className='option selected' onClick={() => onChangeToInbox('inbox')}><i className='fas fa-inbox'></i> Inbox</p>
			  <p className='option' onClick={() => onChangeToTrash('trash')}><i className='far fa-trash-alt'></i> Trash</p>
			  <p className='option' onClick={() => onChangeToSpam('spam')}><i className='fas fa-microchip'></i> Spam</p>
			</nav>
		</div>
	)
}

export default SideNavigation;