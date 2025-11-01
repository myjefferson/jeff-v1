import axios from 'axios';

fetch('https://www.handgeev.com/api/topics/3/fields', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer SEU_TOKEN_AQUI',
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

const primaryHash = import.meta.env.VITE_WORKSPACE_HASH_API;
api.defaults.headers.common['Authorization'] = `Bearer ${primaryHash}`;
api.defaults.headers.common['Content-Type'] = 'application/json';

export const apiTopicProject = () => api.get('/topics/3/fields');
export const apiTopicSkill = () => api.get('/topics/7/fields');
export const apiTopicProfile = () => api.get('/topics/8/fields');