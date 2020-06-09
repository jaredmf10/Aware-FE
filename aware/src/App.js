import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import About from './Components/About'
import GridView from './Containers/GridView'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    // this.setState({startIndex : 0})
  }

  render() {
    console.log(this.state.startIndex)
    let { view } = this.state;
    let displayedSpecies = this.state.species.slice(this.state.startIndex, this.state.startIndex + 6)
    return (
      <div>
        <NavBar />
        <About />
        <FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">System</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={this.handleSelectChange}
            label="All"
            
          >
            <MenuItem value={"all"}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={"marine"}>Marine</MenuItem>
            <MenuItem value={"terrestrial"}>Terrestrial</MenuItem>
          </Select>
        </FormControl>
        {view === "all" && <GridView species={displayedSpecies} addIndex={this.addIndex} subtractIndex={this.subtractIndex} index={this.state.startIndex}/>}
        {view === "marine" && <GridView species={displayedSpecies.filter(species => species.system === 'Marine')} addIndex={this.addIndex} subtractIndex={this.subtractIndex} index={this.state.startIndex}/>}
        {view === "terrestrial" && <GridView species={displayedSpecies.filter(species => species.system === 'Terrestrial')} addIndex={this.addIndex} subtractIndex={this.subtractIndex} index={this.state.startIndex}/>}
      </div>
    )
  }
}
export default App