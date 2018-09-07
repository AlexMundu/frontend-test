import React from 'react';
import './EmailPreview.scss';

const EmailPreview = ({index, from, date, subject, body, onClick, isReaded, openEmail }) => {
	let isReadedStyle = 'container';
	if(openEmail === index){
		isReadedStyle += ' selected-message';
	}
	return(
		isReaded ?
			<div className={ isReadedStyle } onClick={() => onClick(index) }>
				<div className='innerContainer'>
					<div className='prevMessageTop'>
						<p><i className="far fa-user"></i> { from }</p><p>{ date }</p>
					</div>
					<p>{ subject }</p>
					<p>{ body.substring(0,45) }...</p>
				</div>
			</div>
		: 	
			<div className={ isReadedStyle } onClick={() => onClick(index) }>
				<div className='innerContainer'>
					<div className='prevMessageTop'>
						<p><i className="far fa-user"></i> { from }</p><p>{ date }</p>
					</div>
					<p>{ subject }</p>
					<p>{ body.substring(0,45) }...</p>
				</div>
				<div className='unreaded-circle'><i className="fas fa-circle"></i></div>
			</div>
	)
}

export default EmailPreview;