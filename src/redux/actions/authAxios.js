import axios from 'axios';
import { API_BASE } from '../../config/env';


axios.defaults.headers= {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : {}
}

export default axios.create({
    baseURL: `${API_BASE}/`,
  });