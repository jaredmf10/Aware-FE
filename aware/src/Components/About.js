import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const About = () => {

    
        return (
          <>
          <CssBaseline />
          <Container maxWidth="sm">
          <Paper elevation={3} >
            <Typography align="center" style={{ backgroundColor: '#F44336', color: "white"}}>
              <h4> Mission Statement </h4> Aware is a powerful tool both to inform and to inspire action for biodiversity conservation and local policy change. New policy is critical to protecting the natural resources we need to survive. Aware provides information about range, population size, habitat and ecology, use and/or trade, threats, and conservation actions that will help inform necessary conservation decisions. Most NYC area residents would be shocked to know how many threatened species live alongside them.. Here they are, for now at least...
            </Typography> 
          </Paper>
          </Container>
          </>
        )
      }


export default About;