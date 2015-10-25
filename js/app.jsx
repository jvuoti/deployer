require('bootstrap/dist/css/bootstrap.css');

import React from 'react'
import ReactDOM from 'react-dom'

import DeploymentsTable from './components/DeploymentsTable.jsx'

var	deployments = [
		{name: 'foo', lastDeployed: '2015-09-12T12:01:22Z'},
		{name: 'bar', lastDeployed: '2015-09-12T12:03:22Z'},
		{name: 'baz', lastDeployed: '2015-09-12T12:09:22Z'}];

ReactDOM.render(
 	<DeploymentsTable deployments={deployments}/>,
    document.getElementById('container')
);