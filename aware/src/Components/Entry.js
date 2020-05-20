import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

class Entry extends Component {

    parseDate = date => {
        let array = date.split('T');
        return array[0]
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h4>Date: {this.parseDate(this.props.entry.updated_at)}</h4>
                <h4>Species: {this.props.entry.species.name}</h4>
                <p>{this.props.content}</p> 
                <IconButton aria-label="edit" >
                <EditIcon />
                </IconButton>
                <hr></hr>
            </div>
        )
    }
}

export default Entry