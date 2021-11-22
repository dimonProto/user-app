import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Spin} from "antd";
import LayoutComponent from "../components/LayoutComponent/LayoutComponent";
import {editUserRequest, getUserInfoRequest} from "../api/api";
import moment from 'moment';
import UserForm from "../components/UserForm/UserForm";
const UserEdit = (props) => {
    const {id} = useParams()

    const[user, setUser] = useState()


    let navigate = useNavigate();
    useEffect(() => {
        const getUserData = async () => {
            const {data} = await getUserInfoRequest(id)
            data.birth_date = moment(data.birth_date)
            setUser(data)
        }
        getUserData()

    },[])

    const onFinish = (values) => {
        values.birth_date = new Date(values.birth_date).toISOString().slice(0, 10)
        editUserRequest(id, values).then(() =>  navigate('/users'))
    }

    return (
        <LayoutComponent >
            <div className={'createUser'}>
                {
                    user ? (<UserForm onFinish={onFinish} user={user}/>) :
                        <Spin/>
                }
            </div>
        </LayoutComponent>
    )
}

export default UserEdit