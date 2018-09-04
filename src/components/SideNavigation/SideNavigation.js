import React from 'react';
import { FaInbox, FaTrashAlt, FaMicrochip } from 'react-icons/fa';

const SideNavigation = () => {
	return(
		<div>
			<nav>
			  <a href="#"><FaInbox /> Inbox</a>
			  <a href="#"><FaTrashAlt /> Trash</a>
			  <a href="#"><FaMicrochip /> Spam</a>
			</nav>
		</div>
	)
}

export default SideNavigation;