import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import getBooksAction from "../bookAction";

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe('BookActions', () => {

    it('Should be able to dispatch success action', async () => {
        const store = mockStore({});

        // Mock the axios get response
        axios.get.mockImplementation(() => Promise.resolve({data: [{
                id: "1234-2342-234",
                title: 'First book',
                description: 'First book description',
                release_year: '2021'
        }]}));

        await store.dispatch(getBooksAction());
        const actions = store.getActions();
        expect(actions.length).toEqual(1);
        expect(actions[0]).toEqual({
            type: 'BOOKLIST',
            payload: [{
                id: "1234-2342-234",
                title: 'First book',
                description: 'First book description',
                release_year: '2021'
            }]
        });
    });
});
