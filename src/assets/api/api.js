import axios from  'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

const accessApi = {
    'primary_hash_api': import.meta.env.VITE_PRIMARY_HASH_API,
    'secondary_hash_api': import.meta.env.VITE_SECONDARY_HASH_API
}


export const apiProfile = () => { 
    return api.post('/api/profile', accessApi)
}

export const apiProjects = () => { 
    return api.post('/api/projects', accessApi)
}

export const apiProjectById = (idProject) => { 
    accessApi.idProject = idProject;
    return api.post('/api/projectbyid', accessApi)
}