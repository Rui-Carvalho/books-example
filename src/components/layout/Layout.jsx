import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';

const styles = {
};

const Layout = ({ children }) => {
    return (
        <Box>
            <Box>
                <Header />
            </Box>
            <Box mt={8} ml={5}>
                {children}
            </Box>
        </Box>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default withStyles(styles)(Layout);