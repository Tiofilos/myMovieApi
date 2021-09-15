import React from 'react';
import ReactDOM from 'react-dom';
import  {MainView}  from './components/main-view/main-view';
import './index.scss';

class MyFlixApplication extends React.Component { 
	render() { 
		return ( 
            <MainView /> 
	); 
}
}
const container = document.getElementsByClassName('app-container')[0]; //finds the root of the app
ReactDOM.render(React.createElement(MyFlixApplication), container); //tells react to render app in the root DOM element