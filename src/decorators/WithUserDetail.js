import React from "react";
import {connect} from "react-redux";
import {clearUser, getUser, removeUser} from "../redux/userReducer";
import UserDetail from "../pages/UserDetail";

const WithUserDetail = (props) => {

    return (
        <UserDetail {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        user:state.usersPage.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        getUser: (userId) => {
            dispatch(getUser(userId))
        },
        clearUser: () => {
            dispatch(clearUser())
         },
        deleteUser: (userId,callback) => {
            dispatch(removeUser(userId,callback))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithUserDetail)

