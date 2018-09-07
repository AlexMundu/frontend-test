import React from 'react';
import './EmailNavigation.scss';

const EmailNavigation = ({ subject, onDeleteClick }) => {
	
	return(
		<div>

			<nav id='EmailNav'>
				<p>{ subject }</p>
				<p className='action'><i className='fa fa-circle'></i></p>
				<p className='action' onClick={onDeleteClick}><i className='far fa-trash-alt'></i></p>
				<p className='action'><i className='fas fa-microchip'></i></p>
			</nav>
		</div>
	)
}

export default EmailNavigation;