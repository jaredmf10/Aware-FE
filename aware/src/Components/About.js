import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const About = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        marginTop: theme.spacing(5),
        margin: theme.spacing(35),
        width: theme.spacing(72),
        height: theme.spacing(32),
        justify: "center"
      },
    }
  }));

  const classes = useStyles();
    
        return (
    <div className={classes.root}>
      <Paper elevation={3} >
        <Typography align="center" style={{ backgroundColor: '#F44336', color: "white"}}>
          <h4> About </h4> Aware is a powerful tool both to inform and to inspire action for biodiversity conservation and local policy change. New policy is critical to protecting the natural resources we need to survive. Aware provides information about range, population size, habitat and ecology, use and/or trade, threats, and conservation actions that will help inform necessary conservation decisions. Most NYC area residents would be shocked to know how many threatened species live alongside them.. Here they are, for now at least...
        </Typography> 
      </Paper>
    </div>
        )
      }


export default About;