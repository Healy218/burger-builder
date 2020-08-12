import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://services-284723.firebaseio.com/'
});

export default instance;