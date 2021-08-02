import React from 'react';
import renderWithRedux from "../../../../utils/testUtils";
import BookContainer from "../BookContainer";
import BookList from "../BookList";

jest.mock('../BookList');
describe('BookContainer', function () {

    beforeAll(() => {
        BookList.mockImplementation(() => {
            return (<div>mock booklist component</div>);
        });
    });

    it('should render without error', () => {
        const books = [{
            id: '123-AEWFAWF-23AEGAE',
            title: 'First book',
            description: 'First book description',
            release_year: '2021'
        }];

        renderWithRedux(<BookContainer/>, {
            initialState: {
                bookReducer: {
                    books: books
                }
            }
        });
        expect(BookList).toHaveBeenCalledWith({books},{});
    })
});