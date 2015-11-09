///<reference path="../../typings/react/react.d.ts"/>
///<reference path="../../typings/whatwg-fetch.d.ts"/>
///<reference path="../model"/>

import * as React from 'react'
import * as Model from "../model";

export default class DeploymentsTable extends React.Component<DeploymentsTableProps, DeploymentsState> {
    constructor(){
        super();
        this.state = {
            deployments: [],
            loading: true
        }
    }
    
    componentDidMount() {
        fetch(this.props.dataUrl).then(response =>{
           this.state = {
              deployments: response.json(),
              loading: false
           };
        });
    }
    
    render(){
        var rows: any[] = [];        
        this.state.deployments.forEach(function(deployment) {            
            rows.push(<tr key={deployment.name}>
				<td>{deployment.name}</td>
				<td>{deployment.lastDeploymentTime.toDateString()}</td>
				<td>{deployment.lastDeploymentVersion}</td>
				<td><a className="btn btn-primary">Deploy</a></td>
			</tr>);            
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last deployment</th>
                        <th>Last deployed version</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );    
    }
}

export interface DeploymentsTableProps{
    dataUrl: string;
}

export interface DeploymentsState{
    deployments: Model.Deployment[]
    loading: boolean
}