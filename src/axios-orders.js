import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9754f.firebaseio.com/'
});

export default instance;