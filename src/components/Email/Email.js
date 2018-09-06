import React from 'react';
import './Email.scss';

const EmailNavigation = () => {
	
	return(
		<div id='Email'>
			<div id='header'>
				<p>Amazon.com <a href="#" className='selected'>&lt;noreply@amazon.com&gt;</a></p>
				<p className='date'>Thursday, May 26, 11:09 AM</p>
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae viverra tellus. Aenean consequat lacinia
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae viverra tellus. Aenean consequat lacinia
			</p>
		</div>
	)
}

export default EmailNavigation;