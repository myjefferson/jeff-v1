import axios from 'axios';

const primaryHash = import.meta.env.VITE_WORKSPACE_HASH_API;
const api = axios.create({
  baseURL: 'https://handgeev.com/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.defaults.headers.common['Authorization'] = `Bearer ${primaryHash}`;
api.defaults.headers.common['Content-Type'] = 'application/json';

export const apiTopicProject = () => api.get('/topics/3/fields');
export const apiTopicSkill = () => api.get('/topics/7/fields');
export const apiTopicProfile = () => api.get('/topics/8/fields');