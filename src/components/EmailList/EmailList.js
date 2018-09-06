import React from 'react';
import EmailPreview from '../EmailPreview/EmailPreview';
import './EmailList.scss';

const EmailList = () => {
	
	return(
		<div className='scrollableList'>
			<EmailPreview />
			<EmailPreview />
			<EmailPreview />
			<EmailPreview />
			<EmailPreview />
			<EmailPreview />
			<EmailPreview />
			<EmailPreview />
			<EmailPreview />
			<EmailPreview />
		</div>
	)
}

export default EmailList;