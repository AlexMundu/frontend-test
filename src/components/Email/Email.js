import React from 'react';
import './Email.scss';

const EmailNavigation = () => {
	
	return(
		<div id='Email'>
			<div id='header'>
				<p>Amazon.com <a href="#" className='selected'>&lt;noreply@amazon.com&gt;</a></p>
				<p className='date'>Thursday, May 26, 11:09 AM</p>
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae viverra tellus. Aenean consequat lacinia dolor ac aliquam. Pellentesque ultrices nisl sit amet nibh porttitor consequat. Fusce cursus accumsan erat sed sollicitudin. Fusce vel enim eu arcu lacinia sollicitudin. Pellentesque efficitur ex libero, a ultricies odio facilisis eget. Vivamus at aliquet tortor. Vestibulum a elit fringilla, viverra purus in, condimentum nunc. Aliquam eu lobortis mi, laoreet semper nibh. Praesent venenatis tellus vel elit mollis, quis vehicula ligula luctus. Aenean ac dolor ac turpis pulvinar ultricies. Ut nec fringilla sapien. Integer non fringilla mauris, nec mattis massa.

Aenean viverra dolor at leo faucibus, a fringilla velit eleifend. </p>
		</div>
	)
}

export default EmailNavigation;