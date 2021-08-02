import axios from "axios";
import baseUrl from 'src/config';

const getBooksService = () => {
    return axios.get(`${baseUrl}/books`);
}

export default getBooksService;