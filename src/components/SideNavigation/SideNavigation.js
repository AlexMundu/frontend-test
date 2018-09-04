import React from 'react';

const SideNavigation = () => {
	return(
		<div>
			<nav className='navbar'>
			  <a href="#"><i className="fas fa-inbox"></i> Inbox</a>
			  <a href="#"><i className="far fa-trash-alt"></i> Trash</a>
			  <a href="#"><i className="fas fa-microchip"></i> Spam</a>
			</nav>
		</div>
	)
}

export default SideNavigation;