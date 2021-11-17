import React from "react";
import {connect} from "react-redux";
import {getUser, removeUser, requestUsers} from "../redux/userReducer";
import UserList from "../pages/UserList";

const WithUserList = (props) => {

    return (
        <UserList {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        getUsers: (users) => {
            dispatch(requestUsers(users))
        },
        deleteUser: (userId,callback) => {
            dispatch(removeUser(userId,callback))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithUserList)

