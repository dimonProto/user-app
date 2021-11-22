import React from "react";
import {clearUser, createUser, getUser, removeUser, requestUsers} from "../redux/userReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        user:state.usersPage.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        getUsers: (users) => {
            dispatch(requestUsers(users))
        },
        getUser: (userId) => {
            dispatch(getUser(userId))
        },
        deleteUser: (userId,callback) => {
            dispatch(removeUser(userId,callback))
        },
        clearUser: () => {
            dispatch(clearUser())
        },
        createUser: (user,callback) => {
            dispatch(createUser(user,callback))
        }
    }
}

const WithUser = ({children, ...props}) => React.cloneElement(children,{...props})

export default connect(mapStateToProps,mapDispatchToProps)(WithUser)

