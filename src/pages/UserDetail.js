import React, {useEffect} from "react";
import LayoutComponent from "../components/LayoutComponent/LayoutComponent";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Space} from "antd";

const ALLOWED_USER_FIELDS = ['first_name','last_name','birth_date','gender','job','biography']
const UserDetail = (props) => {

    const  { id } = useParams();
    const {getUser,user,deleteUser} = props

    useEffect(() => {
        getUser(id)

    },[])
    let navigate = useNavigate();
    const formatText = (text) => text.replace(/_/g, ' ').split().map( str => str.charAt(0).toUpperCase() + str.slice(1))

    return(
        <LayoutComponent>
            <Space direction={"vertical"} >
                {Object.keys(user).filter(u => ALLOWED_USER_FIELDS.includes(u)).map(el => {
                  return (
                       <Space >
                           <Space size={0}>{formatText(el)}:</Space>
                           <Space>{user[el]}</Space>
                       </Space>
                  )
                })}
                <div>
                    <Space>
                        <Space size={0}>Status:</Space>
                        <Space>{user.is_active ? 'Enable' : 'Disable'}</Space>
                    </Space>
                </div>
                <Space>
                    <Button type="dashed"  ><Link to={`/user/edit/${id}`}>Edit</Link></Button>
                    <Button onClick={() => deleteUser(id,()=> navigate('/users'))} type="primary" danger>Delete</Button>
                </Space>

            </Space>
        </LayoutComponent>
    )
}

export default UserDetail