import axios from 'axios';
//import App from '..';

const api = axios.create({
baseURL: 'http://10.102.50.46:1880'
});

export default api;