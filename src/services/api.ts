import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rodriguescosta.com/api/crypto',
});

export default api;
