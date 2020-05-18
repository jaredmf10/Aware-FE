import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';


const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar style={{ background: '#F44336' }}>
                <Typography>
                AWARE
                </Typography>
                <div>
                    <IconButton color="inherit" href={'/'}>
                    <HomeIcon />
                    </IconButton>
                    <IconButton color="inherit" href={'/Profile'}>
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;