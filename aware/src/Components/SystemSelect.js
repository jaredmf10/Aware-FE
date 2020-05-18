import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function SimpleSelect() {
    const classes = useStyles();
//     const [setView] = React.useState('');

//   const handleChange = (event) => {
//     setView(event.target.value);
//   };
  
    return (
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">System</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={handleChange}
            label="All"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"marine"}>Marine</MenuItem>
            <MenuItem value={"terrestrial"}>Terrestrial</MenuItem>
          </Select>
        </FormControl>
        
      </div>
    );
  }