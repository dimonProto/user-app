import React, {useEffect} from "react";
import LayoutComponent from "../components/LayoutComponent/LayoutComponent";
import {Button, Table} from "antd";
import {Link} from "react-router-dom";
import {clearUser} from "../redux/userReducer";

const UserList = (props) => {

    const {users,deleteUser,getUsers} = props
    useEffect(() => {
        getUsers()
        clearUser()
    },[])


    const columns = [
        {
            title: 'first name',
            dataIndex: 'first_name',
            key: 'first_name',
            render: (text,user) => (
                <Link to={`/user/${user.id}`}>{text}</Link>
             ),
        },
        {
            title: 'last name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'DOB',
            dataIndex: 'birth_date',
            key: 'birth_date',
        },
        {
            title: 'sex',
            key: 'gender',
            dataIndex: 'gender',
        },
        {
            title: 'Action',
            key: 'deleted',
            dataIndex: 'deleted',
            render: (text,user) => (
                <Button onClick={() => deleteUser(user.id)} type="primary" danger>Delete</Button>
            ),
        }

    ];

    return(
        <LayoutComponent >
            <div className={'buttonBlock'}>
                <Button type="primary"><Link to={'/user/create'}> Add User</Link></Button>
            </div>
            <Table columns={columns} dataSource={users} />
        </LayoutComponent>
    )
}

export default  UserList