import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {'authorization': 'bearer '+localStorage.getItem('token')}
})

export const createtUser = payload => api.post(`/auth/register`, payload)
export const UserLogin = payload => api.post(`/auth/login`, payload)
export const UserProfile = payload => api.get(`/users/getprofile/`+payload)

export const createContact = payload => api.post(`/create-contact`, payload)

export const getnavbar = () => api.get(`/admin/getnavbar`)

export const getproducts = () => api.get(`/admin/getproducts`)

export const getproduct = (payload) => api.get(`/admin/getproduct/`+payload)


const Apis = {
    createtUser,
    UserLogin,
    UserProfile,
    createContact,
    getnavbar,
    getproducts,
    getproduct
}

export default Apis;   
