import React from 'react';
import PropTypes from "prop-types";
import {Box} from '@material-ui/core'
import makeStyles from "./BookStyles";

const BookList = ({books}) => {
    const classes = makeStyles();
    // console.log('BookList.books=', books);
    return (
        <Box className={classes.bookList}>
            {
                books.map(b => {
                    return <div key={b.id}>{b.id}</div>;
                })
            }
        </Box>
    );
};

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            release_year: PropTypes.string.isRequired
        }
    )).isRequired,
};
export default BookList;