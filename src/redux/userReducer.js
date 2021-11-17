import {createUserRequest, deleteUserRequest, getUserInfoRequest, getUsers} from "../api/api";

const SET_USERS = 'SET_USERS'
const SET_USER = 'SET_USER'
const DELETE_USER = 'DELETE_USER'
const CREATE_USER = 'CREATE_USER'
const CLEAR_USER = 'CLEAR_USER'

let initialState = {
    users: [],
    user: {}
}


const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case DELETE_USER:
            return {
                ...state,
                userId: state.users.filter(u => u.id !== action.payload.userId)
            }
        case CREATE_USER:
            return {
                ...state
            }
        case CLEAR_USER:
            return {
                ...state,
                user:{}
            }

        default:
            return state
    }
}


export const setUsers = (users) =>({type:SET_USERS,users})
export const setUser = (user) =>({type:SET_USER,user})
export const deleteUser = (userId) =>({type:DELETE_USER,payload:{userId}})
export const makeUser = () => ({type:CREATE_USER})
export const clearUser = () => ({type:CLEAR_USER})


export const requestUsers = () => async (dispatch) =>{
    try {
        const {data} = await getUsers()
        dispatch(setUsers(data))
    } catch (e) {
        console.log(e)
    }

}


export const getUser = (userId) => async (dispatch) => {
    try {
        const {data} = await getUserInfoRequest(userId)
        dispatch(setUser(data))

    } catch (e) {
        console.log(e)
    }
}

export const removeUser = (userId,callback) =>  async (dispatch) =>{
    try {
        const {data} = await deleteUserRequest(userId)
        dispatch(deleteUser(data))
        if(callback){
            callback()
        }
    } catch (e) {
        console.log(e)
    }

}

export const createUser = (user,callback) => async (dispatch) => {
    try {
        const {data} = await createUserRequest(user)
        dispatch(makeUser(data))
        callback()
    } catch (e) {
        console.log(e)
    }
}


export default userReducer