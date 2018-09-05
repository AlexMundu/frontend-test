import React from 'react';
import './SideNavigation.scss';

const SideNavigation = () => {
	return(
		<div>
			<nav className='SideNav'>
			  <p className='option selected'><i className='fas fa-inbox'></i> Inbox</p>
			  <p className='option'><i className='far fa-trash-alt'></i> Trash</p>
			  <p className='option'><i className='fas fa-microchip'></i> Spam</p>
			</nav>
		</div>
	)
}

export default SideNavigation;