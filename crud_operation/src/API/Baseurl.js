import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reqres.in/api/users',
});

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;