import * as axios from 'axios'

export const getUsers = async () => {
    return  axios.get('https://frontend-candidate.dev.sdh.com.ua/v1/contact/')
}

export const deleteUserRequest = async (userId) => {
    return  axios.delete(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${userId}`)
}

export const getUserInfoRequest = async (userId) => {
    return  axios.get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${userId}`)
}

export const createUserRequest = async (user) => {
    return  axios.post(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/`, user)
}
export const editUserRequest = async (userId,user) => {
    return  axios.put(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${userId}`, user)
}
