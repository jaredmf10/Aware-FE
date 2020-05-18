import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import About from './Components/About'
import GridView from './Containers/GridView'

class App extends Component {

  state = {
    species : [],
    view : "all",
    startIndex : 0
  }

  componentDidMount() {
    fetch('http://localhost:4000/species')
    .then(res => res.json())
    .then(data => {this.setState({ species: data })})
  }

  addIndex = () => {
    let newIndex = this.state.startIndex + 6
    if( newIndex >= this.state.species.length ){
      newIndex = 0
    }
    this.setState({ startIndex: newIndex })
  }

  subtractIndex = () => {
    let newIndex = this.state.startIndex - 6
    
    this.setState({ startIndex: newIndex })
  }

  setView = (type) => {
    this.setState({view : type})
  }


  handleSelectChange = (event) => {
    this.setView(event.target.value);
  }

  render() {
    let displayedSpecies = this.state.species.slice(this.state.startIndex, this.state.startIndex + 6)
    return (
      <div>
        <NavBar />
        <About selectChange={this.handleSelectChange}/>
        <GridView species={displayedSpecies} addIndex={this.addIndex} subtractIndex={this.subtractIndex} index={this.state.startIndex}/>
      </div>
    )
  }
}
export default App