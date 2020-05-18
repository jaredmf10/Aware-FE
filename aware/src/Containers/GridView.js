import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import SpeciesCard from './SpeciesCard'
import Button from '@material-ui/core/Button';

class GridView extends Component {

    render() {
        
        return (
            <div>
            { this.props.species ? (
                <div>
                    <Grid container spacing={5} style={{padding: 0}}>
                        { this.props.species.map(currentSpecies => (
                            <Grid item xs={4} key={currentSpecies.id}>
                                <SpeciesCard key={currentSpecies.id} species={currentSpecies} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                ) : "No species found" }
                <br></br>
                <br></br>
                {this.props.index > 5 ? <Button variant="contained" size="large" style={{ backgroundColor: '#F44336', color: "white"}} onClick={this.props.subtractIndex}>
                    Back
                </Button> : null}
                <Button variant="contained" size="large" style={{ backgroundColor: '#F44336', color: "white"}} onClick={this.props.addIndex}>
                    Next
                </Button>
            </div>
        )
    }
}

export default GridView