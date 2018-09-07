import React from 'react';
import './EmailPreview.scss';

const EmailPreview = ({index, from, date, subject, body, onClick, isReaded }) => {
	return(
		<div className='container ' onClick={() => onClick(index) }>
			<div className='innerContainer'>
				<div className='prevMessageTop'>
					<p><i className="far fa-user"></i> { from }</p><p>{ date }</p>
				</div>
				<p>{ subject }</p>
				<p>{ body.substring(0,45) }...</p>
			</div>
		</div>
	)
}

export default EmailPreview;