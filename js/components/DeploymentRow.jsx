import React, { Component, PropTypes } from 'react'

export default class DeploymentRow extends Component { 	 
	render(){
		let model = this.props.deployment;
		return (
		<tr>
			<td>{model.name}</td>
			<td>{model.lastDeployed}</td>
			<td><a className="btn btn-primary">Deploy</a></td>
		</tr>);
	}
};