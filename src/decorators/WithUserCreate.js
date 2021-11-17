import React from "react";
import {connect} from "react-redux";
import {createUser} from "../redux/userReducer";
import UserCreate from "../pages/UserCreate";

const WithUserCreate = (props) => {

    const {createUser} = props

    return (
        <UserCreate createUser={createUser}/>
    )
}

let mapDispatchToProps = (dispatch) => {
    return{
        createUser: (user,callback) => {
            dispatch(createUser(user,callback))
        }
    }
}

export default connect(null,mapDispatchToProps)(WithUserCreate)

