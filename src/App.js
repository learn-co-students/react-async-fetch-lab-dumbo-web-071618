
import React, { Component } from 'react';
import People from './components/People.js'
class App extends Component {

	state = {
		peopleInSpace: []
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
		.then(res=>res.json())
		.then(results => {
			this.setState({peopleInSpace: [results.people]})
		})
	}
	

	render() {
		return (
			<div>
				<People peopleInSpace={this.state.peopleInSpace} />
			</div>
		);
	}
}

export default App;
