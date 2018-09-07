import React from 'react';
import './EmailNavigation.scss';

const EmailNavigation = ({ subject, onDeleteClick, onMarkAsUnread, onMarkAsSpam}) => {
	
	return(
		<div>

			<nav id='EmailNav'>
				<p>{ subject }</p>
				<p className='action' onClick={onMarkAsUnread}><i className='fa fa-circle'></i></p>
				<p className='action' onClick={onDeleteClick}><i className='far fa-trash-alt'></i></p>
				<p className='action' onClick={onMarkAsSpam}><i className='fas fa-microchip'></i></p>
			</nav>
		</div>
	)
}

export default EmailNavigation;