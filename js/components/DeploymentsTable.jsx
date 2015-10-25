import React, { Component, PropTypes } from 'react'
import DeploymentRow from './DeploymentRow.jsx'

export default class DeploymentsTable extends Component {
    static propTypes: {
        deployments: React.propTypes.array
    }  
    render(){
        var rows = [];        
        this.props.deployments.forEach(function(deployment) {            
            rows.push(<DeploymentRow deployment={deployment} key={deployment.name} />);            
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );    
    }
}