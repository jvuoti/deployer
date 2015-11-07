export class Deployment{
	constructor(
		public name: string, 
		public lastDeploymentTime: Date,
		public lastDeploymentVersion: string){}
}