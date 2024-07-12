import axios, { type AxiosInstance } from 'axios';
import { BACKEND_URL } from '../types/global';

const api: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

export default api;
