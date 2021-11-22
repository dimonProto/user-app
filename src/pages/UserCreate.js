import React from "react";
import LayoutComponent from "../components/LayoutComponent/LayoutComponent";
import {useNavigate} from "react-router-dom";
import UserForm from "../components/UserForm/UserForm";

const INITIAL_DATA = {
    gender: 'female',
    is_active: true
}

const UserCreate = (props) => {

    const {createUser} = props
    let navigate = useNavigate();

    const onFinish = (values) => {
        values.birth_date = new Date(values.birth_date).toISOString().slice(0, 10)
        createUser(values, () => navigate('/users'))
    }
    return (
        <LayoutComponent >
            <div className={'createUser'}>
                <UserForm onFinish={onFinish} user={INITIAL_DATA}/>
            </div>
        </LayoutComponent>
    )
}

export default UserCreate