import React, {Component} from 'react';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
import EmailList from '../../components/EmailList/EmailList';
import EmailNavigation from '../../components/EmailNavigation/EmailNavigation';
import Email from '../../components/Email/Email';
import './App.scss';

class App extends Component {


    render () {
    	return (
    		<div id='Appcontainer'>
    			<div id='EmailListContainer'>
		        	<SideNavigation />
		        	<EmailList />
		        </div>
				<div id='EmailDisplay'>
					<EmailNavigation />
					<Email />
				</div>
		    </div>
    	) 
    }
}

export default  App;