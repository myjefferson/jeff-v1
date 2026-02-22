import axios from 'axios';

const WORKSPACE_HASH = import.meta.env.VITE_WORKSPACE_HASH_API;
const api = axios.create({
  baseURL: 'https://www.handgeev.com/api/v1',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.defaults.headers.common['Authorization'] = `Bearer ${WORKSPACE_HASH}`;
api.defaults.headers.common['Content-Type'] = 'application/json';

export const apiTopicProject = () => api.get('/topics/17');
export const apiTopicSkill = () => api.get('/topics/18');
export const apiTopicProfile = () => api.get('/records/191');