import React, { Component } from 'react'
import NavBar from './NavBar'

class Profile extends Component {

    state = {
        follows : []
    }

    
    render() {
        return (
            <div>
                <NavBar />
                Welcome!
            </div>
        )
    }
}

export default Profile