///<reference path="./components/DeploymentsTable"/>
///<reference path="../typings/require.d.ts"/>
///<reference path="../typings/react-dom/react-dom.d.ts"/>
///<reference path="./model"/>

require('bootstrap/dist/css/bootstrap.css');

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as Model from "./model"
import DeploymentsTable from "./components/DeploymentsTable"

// 
// 
// var	deployments = [
// 		new Model.Deployment('foo', new Date('2015-09-12T12:01:22Z'), "1.2.0"),
// 		new Model.Deployment('bar', new Date('2015-09-12T12:31:22Z'), "1.1.0"),
// 		new Model.Deployment('baz', new Date('2015-09-12T11:01:22Z'), "1.19.0")];

ReactDOM.render(
 	<DeploymentsTable dataUrl="http://localhost:3000/deployment"/>,
    document.getElementById('container')
);
