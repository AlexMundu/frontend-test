import React from 'react';
import './Email.scss';

const Email = ({ email }) => {
	
	return(
		<div id='Email'>
			<div id='header'>
				<p>{ email.from.substring(0, email.from.indexOf('@')) } <a href="#" className='selected'>&lt;{ email.from }&gt;</a></p>
				<p className='date'>{ email.date }</p>
			</div>
			<p>
				{ email.body }
			</p>
		</div>
	)
}

export default Email;