import React from 'react';
import './EmailPreview.scss';

const EmailPreview = () => {
	return(
		<div className='container '>
			<div className='innerContainer'>
				<div className='prevMessageTop'>
					<p><i className="far fa-user"></i> Amazon.com</p><p>May26</p>
				</div>
				<p>Amazon SES Adress Verification Request</p>
				<p>Lorem ipsum dolor sit amet, consectetur adip...</p>
			</div>
		</div>
	)
}

export default EmailPreview;