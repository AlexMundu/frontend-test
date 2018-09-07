import React from 'react';
import EmailPreview from '../EmailPreview/EmailPreview';
import './EmailList.scss';

const EmailList = ({ emails, onClick, openEmail, openTab }) => {
	
	return(
		<div className='scrollableList'>
			{
				emails.map( (email, i) => {
					if (email.folder === openTab) {
						return (<EmailPreview 
							key={i} from={ emails[i].from } 
							date={ emails[i].date } 
							subject={ emails[i].subject } 
							body={ emails[i].body } 
							onClick={ onClick }
							isReaded= { emails[i].isReaded }
							index= {i}
							openEmail={openEmail}
						/>)
					}
					
				})
			}
		</div>
	)
}

export default EmailList;