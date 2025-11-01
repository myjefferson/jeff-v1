import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.handgeev.com',
});
app.use(cors({
    origin: 'https://www.handgeev.com',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
const primaryHash = import.meta.env.VITE_WORKSPACE_HASH_API;
api.defaults.headers.common['Authorization'] = `Bearer ${primaryHash}`;

export const apiTopicProject = () => api.get('/api/topics/3/fields');
export const apiTopicSkill = () => api.get('/api/topics/7/fields');
export const apiTopicProfile = () => api.get('/api/topics/8/fields');