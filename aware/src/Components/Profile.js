import React, { Component } from 'react'
import NavBar from './NavBar'
import FollowedSpeciesCard from './FollowedSpeciesCard'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Entry from './Entry'

class Profile extends Component {

    state = {
        follows : [],
        entries : [],
        newEntry : {user_id : 2, date : Date.now()}
    }

    componentDidMount(){
        fetch('http://localhost:4000/follows')
        .then(res => res.json())
        .then(follows => this.setState({follows})) 

        fetch('http://localhost:4000/entries')
        .then(res => res.json())
        .then(entries => this.setState({entries})) 
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

    handleFollowDelete = (id) => {
        fetch(`http://localhost:4000/follows/${id}`,{
        method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>this.setState({follows:[...this.state.follows].filter(follow=>follow.id!==id)})) 
        }

    render() {
        // console.log(this.state.entries)
        let filteredFollows = this.state.follows.filter(follow => follow.user_id === 2)
        return (
            <div>
                <NavBar />
                { this.state.follows.length ? (
                <div>
                    <Grid container spacing={5} style={{padding: 0}}>
                        { filteredFollows.map(follow => (
                            <Grid item xs={4} key={follow.species_id}>
                                <FollowedSpeciesCard key={follow.species_id} species={follow.species} follow={follow} delete={this.handleFollowDelete}/>
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
        <label for="cars">Choose a species:</label>
            <select id="species" name="species_id" onChange={this.handleFormChange}>
                {this.state.follows.map(follow => <option key={follow.species_id}value={follow.species_id}>{follow.species.name}</option>)}
            </select> <br></br>
        <input type="hidden" name="date" id="date" value={Date.now()}></input>
        <input type="hidden" name="user_id" id="user_id" value={"2"}></input>
        <input placeholder="Entry Name" name="name" onChange={this.handleFormChange}/> <br></br>
        <textarea placeholder="Description" rows={10} name="content" onChange={this.handleFormChange}/> <br></br>
        <input type="submit" value="Add Entry to Journal" />
      </form>
      </Grid>
      <Grid sm ={4}>
      <div className="entries-container">
        {this.state.entries.length ? 
          this.state.entries.map(entry => 
            <Entry delete={this.handleDelete} key={entry.id} name={entry.name} content={entry.content} entry={entry}/>)
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