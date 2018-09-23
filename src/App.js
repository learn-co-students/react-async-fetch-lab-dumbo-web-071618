// create your App component here
import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data => this.setState({
        peopleInSpace: data.people
      }))
  }

  render(){
    console.log(this.state.peopleInSpace)

    let ppl = this.state.peopleInSpace.map((obj)=>{
      return <li>Craft: {obj.craft} Name: {obj.name}</li>
    })

    return(
      <ul>
        {ppl}
      </ul>
    )
  }
}

export default App
