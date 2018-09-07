import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App/App";
import { Provider } from 'react-redux';
import { click, addEmailToList } from './reducers';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({ click, addEmailToList });
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.getElementById('app'));