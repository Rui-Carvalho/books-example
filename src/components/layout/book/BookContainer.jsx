import React, {useEffect, useDebugValue} from 'react';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import getBooksAction from "../../../module/book/bookAction";
import {getBookSelector} from "../../../module/book/bookSelector";
import BookFilter from './BookFilter';
import styles from "./BookStyles";
import BookList from './BookList';

const BookContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBooksAction());
    },[dispatch]);
    const books = useSelector(getBookSelector);
    // console.log('BookContainer.books=', books);
    const classes = styles();
    return (
        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                {books.length > 0 ?
                    <BookList books={books}/>
                    : 'No books available'
                }
            </Box>
        </Box>
    );
}

export default BookContainer;