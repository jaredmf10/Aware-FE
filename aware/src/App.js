import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import About from './Components/About'
import GridView from './Containers/GridView'

class App extends Component {

  state = {
    species : [],
    view : "all"
  }

  componentDidMount() {
    fetch('http://localhost:4000/species')
    .then(res => res.json())
    .then(data => {this.setState({ species: data })})
  }


  setView = (type) => {
    this.setState({view : type})
  }


  handleSelectChange = (event) => {
    this.setView(event.target.value);
  }

  render() {
    console.log(this.state.view)
    return (
      <div>
        <NavBar />
        <About setView={this.setView} handleSelectChange={this.handleSelectChange} view={this.state.view}/>
        <GridView species={this.state.species}/>
      </div>
    )
  }
}
export default App