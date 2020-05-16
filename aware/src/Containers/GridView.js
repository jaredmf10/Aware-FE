import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import SpeciesCard from './SpeciesCard'

class GridView extends Component {

    render() {
        // console.log(this.props.species)
        return (
            <div>
            { this.props.species ? (
                <div>
                    <Grid container spacing={5} style={{padding: 0}}>
                        { this.props.species.map(currentSpecies => (
                            <Grid item xs={4}>
                                <SpeciesCard key={currentSpecies.id} species={currentSpecies} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : "No species found" }
        </div>
        )
    }
}

export default GridView