import React, { Component } from 'react'
import NavBar from './NavBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CommentContainer from './CommentContainer'

class Species extends Component {

    state = {
        species : []
    }
    
    componentDidMount() {
    fetch('http://localhost:4000/species')
    .then(res => res.json())
    .then(data => {this.setState({ species: data })})
    }

    parseName = name => {
        let arr = name.split(" ")
        return arr.join("_")
    }

    parseDate = date => {
        let array = date.split('T');
        return array[0]
    }

    render() {
        const currentSpecies = this.state.species.filter(species => "/" + (this.parseName(species.name)) === window.location.pathname)
        const species = currentSpecies[0]
        return (
            <div>
                <NavBar />
                {species ?
                <div>
                <Grid container spacing={0} direction="row" justify="space-around" alignItems="center">
                    <Grid >
                        <Card >
                            <CardContent align="center">
                                <img src={species.image} alt="Smiley face" height="300" width="350"></img> 
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card >
                            <Typography align="center" variant="h4" gutterBottom>
                                {species.name}
                            </Typography>
                            <Typography align="center" variant="overline" gutterBottom> 
                                ({species.scientific_name}) 
                            </Typography>
                            <Typography align="center" >
                                System: {species.system}
                            </Typography>
                            <IconButton >
                                <BookmarkBorderIcon fontSize="large" />
                            </IconButton>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card >
                            <Typography align="center">
                                Redlist Category: {species.redlist_category} <br></br>
                                Population Trend: {species.population_trend} <br></br>
                                Last Assessment: {this.parseDate(species.assessment_date)}
                            </Typography>
                        </Card>
                    </Grid>
                    
                    <Grid xs={11}>
                        <Card >
                            <Typography align="center">
                            <div dangerouslySetInnerHTML={{__html: species.rationale}}></div>
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid xs={11}>
                        <Card >
                            <Typography align="center">
                            <div dangerouslySetInnerHTML={{__html: species.population}}></div>
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid sm={4}>
                        <Card >
                            <Typography align="center">
                            <div dangerouslySetInnerHTML={{__html: species.habitat}}></div>
                            </Typography>
                        </Card>
                        </Grid>
                        <Grid xs={5}>
                        <Card >
                            <CardContent align="center">
                                <img src="https://f002.backblazeb2.com/file/cached-individual-maps/T39378A2913541.jpg?Authorization=3_20200518162315_53977316a3663aae9464738f_3dfe013c1e092dcdf1e12b9d0e2274b74c0efa39_002_20200525162315_0018_dnld" alt="Smiley face" height="600" width="450"></img> 
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={11}>
                        <Card >
                            <Typography align="center" >
                                Threats
                            <div dangerouslySetInnerHTML={{__html: species.threats}}></div>
                            </Typography>
                            <Typography align="center">
                                Use/Trade
                            <div dangerouslySetInnerHTML={{__html: species.use_trade}}></div>
                            </Typography>
                            <Typography align="center">
                                Conservation Actions
                            <div dangerouslySetInnerHTML={{__html: species.conservation_actions}}></div>
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                    
                <CommentContainer species_id={species.id}/>
                
                </div>
                : null}
            </div>
        )
    }
}

export default Species