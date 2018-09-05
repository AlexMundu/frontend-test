import React from 'react';
import './EmailNavigation.scss';

const EmailNavigation = () => {
	
	return(
		<div>

			<nav id='EmailNav'>
				<p>Amazon SES Address Verification Request</p>
				<p className='action'><i className='fa fa-circle'></i></p>
				<p className='action'><i className='far fa-trash-alt'></i></p>
				<p className='action'><i className='fas fa-microchip'></i></p>
			</nav>
		</div>
	)
}

export default EmailNavigation;