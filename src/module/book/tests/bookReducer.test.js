import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import bookReducer, {INITIAL_BOOK_REDUCER_STATE} from "../bookReducer";

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe('BookReducer', () => {

    it('Should be able to return a new state with new books object', async () => {
        const action = {
            type: 'BOOKLIST',
            payload: [{
                id: "1234-2342-234",
                title: 'First book',
                description: 'First book description',
                release_year: '2021'
            }]
        };
        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);

        expect(newState.books).toEqual([{
            id: "1234-2342-234",
            title: 'First book',
            description: 'First book description',
            release_year: '2021'
        }]);
    });
});
