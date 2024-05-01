import axios from 'axios';

const baseURL = import.meta.env.VITE_ALPHA_VANTAGE_BASE_URL;

export const api = axios.create({
  baseURL: baseURL,
})

api.defaults.headers.common['Content-Type'] = 'application/json';
