import axios from 'axios';

const primaryHash = import.meta.env.VITE_WORKSPACE_HASH_API;
fetch('https://www.handgeev.com/api/topics/3/fields', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${primaryHash}`,
    'Content-Type': 'application/json'
  }
}).then(r => r.json()).then(console.log).catch(console.error);

const api = axios.create({
  baseURL: 'https://handgeev.com/api',
  withCredentials: false, // ✅ Isso você pode configurar
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*' ❌ ISSO NÃO FUNCIONA!
  }
});

api.defaults.headers.common['Authorization'] = `Bearer ${primaryHash}`;
api.defaults.headers.common['Content-Type'] = 'application/json';

export const apiTopicProject = () => api.get('/topics/3/fields');
export const apiTopicSkill = () => api.get('/topics/7/fields');
export const apiTopicProfile = () => api.get('/topics/8/fields');