import React, { Component } from 'react';

class People extends Component {

	
	renderPeople = () => {
		
		return this.props.peopleInSpace.map( peep => {
			return (
				<div>
					{peep.name}
				</div>
			)
		})
	}

	render() {
		return (
			<strong>
				{this.renderPeople()}
			</strong>
		)
	}

}

export default People;
