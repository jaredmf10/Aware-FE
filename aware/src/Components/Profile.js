import React, { Component } from 'react'
import NavBar from './NavBar'
import SpeciesCard from '../Containers/SpeciesCard'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Entry from './Entry'

class Profile extends Component {

    state = {
        follows : [],
        entries : [],
        newEntry : {}
    }

    componentDidMount(){
        fetch('http://localhost:4000/follows.json')
        .then(res => res.json())
        .then(follows => this.setState({follows})) 
    }

    handleFormChange = (e) => {
        this.setState({newEntry: {...this.state.newEntry, [e.target.name]:e.target.value}})
    }
    
    addEntry = (entry) => {
        this.setState({
            entries: [...this.state.entries, entry],
        });
    };
    
    handlePost = (event) => {
        
    event.preventDefault()
        fetch('http://localhost:4000/entries',{
        method: 'POST',
        headers: {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
        },
        body: JSON.stringify(this.state.newEntry)
        })
        .then(res => res.json())
        .then(entry => {this.addEntry(entry)})
    }

    render() {
        console.log(this.state.follows)
        // let filteredFollows = this.state.follows.filter(follow => follow.user_id === 2)
        return (
            <div>
                <NavBar />
                { this.state.follows.length ? (
                <div>
                    <Grid container spacing={5} style={{padding: 0}}>
                        { this.state.follows.map(follow => (
                            <Grid item xs={4} key={follow.species_id}>
                                <SpeciesCard key={follow.species_id} species={follow.species} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                ) : <Typography align="center" variant="h4" gutterBottom>
                No Follows yet!
                </Typography>}
                <div>
        <Grid container spacing={0} direction="row" justify="space-around" alignItems="center">
        <Grid sm ={4}>
        <form className="new-entry-form" id="form" onSubmit={this.handlePost}>
        <input type="hidden" name="date" id="date" value={Date.now()}></input>
        <input placeholder="Enter Name" name="name" onChange={this.handleFormChange}/> <br></br>
        <textarea placeholder="Comment" rows={10} name="content" onChange={this.handleFormChange}/> <br></br>
        <input type="submit" value="Add Comment" />
      </form>
      </Grid>
      <Grid sm ={4}>
      <div className="entries-container">
        {this.state.entries.length ? 
          this.state.entries.map(entry => 
            <Entry key={entry.id} name={entry.name} content={entry.content} entry={entry}/>)
        : <Typography align="center" variant="h4" gutterBottom>
        No Entries yet!
        </Typography>}
      </div>
      </Grid>
      </Grid>
      </div>
            </div>
        )
    }
}

export default Profile