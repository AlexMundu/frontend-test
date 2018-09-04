import React, {Component} from 'react';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
import EmailList from '../../components/EmailList/EmailList';
import './App.scss';

class App extends Component {
    render () {
    	return (
    		<div>
		        <SideNavigation />
		        <EmailList />
		        {/*
					
					<EmailDisplay />
		        */}
		    </div>
    	) 
    }
}

export default  App;