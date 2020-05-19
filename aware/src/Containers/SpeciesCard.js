import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Species = (props) => {
console.log(props)
  const parseName = name => {
    let arr = name.split(" ")
    return arr.join("_")
}
    
        const useStyles = makeStyles({
            root: {
              maxWidth: 345,
            },
            media: {
              height: 200,
            },
          });
          const classes = useStyles();
        return (
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.species.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.species.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={`/${parseName(props.species.name)}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Species