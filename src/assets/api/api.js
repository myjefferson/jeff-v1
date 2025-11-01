import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.handgeev.com/api',
  withCredentials: false, // ✅ Isso você pode configurar
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

const primaryHash = import.meta.env.VITE_WORKSPACE_HASH_API;
console.log(primaryHash)

api.defaults.headers.common['Authorization'] = `Bearer ${primaryHash}`;
api.defaults.headers.common['Content-Type'] = 'application/json';

export const apiTopicProject = () => api.get('/topics/3/fields');
export const apiTopicSkill = () => api.get('/topics/7/fields');
export const apiTopicProfile = () => api.get('/topics/8/fields');