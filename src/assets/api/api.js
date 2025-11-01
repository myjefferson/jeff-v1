import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.handgeev.com/api',
});

const primaryHash = import.meta.env.VITE_WORKSPACE_HASH_API;
api.defaults.headers.common['Authorization'] = `Bearer ${primaryHash}`;
api.defaults.headers.common['Content-Type'] = 'application/json';

export const apiTopicProject = () => api.get('/api/topics/3/fields');
export const apiTopicSkill = () => api.get('/api/topics/7/fields');
export const apiTopicProfile = () => api.get('/api/topics/8/fields');