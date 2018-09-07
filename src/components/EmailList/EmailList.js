import React from 'react';
import EmailPreview from '../EmailPreview/EmailPreview';
import './EmailList.scss';

const EmailList = ({ emails, onClick }) => {
	
	return(
		<div className='scrollableList'>
			{
				emails.map( (email, i) => {
					return (<EmailPreview 
						key={i} from={ emails[i].from } 
						date={ emails[i].date } 
						subject={ emails[i].subject } 
						body={ emails[i].body } 
						onClick={ onClick }
						isReaded= { emails[i].isReaded }
						index= {i} />)
				})
			}
		</div>
	)
}

export default EmailList;