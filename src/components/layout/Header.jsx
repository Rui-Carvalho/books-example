import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header(props) {
    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Header for Layout
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;