import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_ADDR}`;

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    if (localStorage.getItem('accessToken')) {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config
})

api.interceptors.response.use(config => {
    return config
}, async (error) => {
    throw error
})

export default api;