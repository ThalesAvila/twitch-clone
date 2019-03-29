import React from 'react';
import { GAPIClientID } from './../../config';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: GAPIClientID,
				scope: 'email'
			});
		});
	}
	render() {
		return <div>GoogleAuth</div>;
	}
}
export default GoogleAuth;
